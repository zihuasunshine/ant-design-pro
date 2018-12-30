import fetch from 'dva/fetch';
import { notification, Icon } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';
import router from 'umi/router';
import hash from 'hash.js';
import { notificationTip, isAntdPro } from './utils';
import { reject } from 'q';

const refreshTokenURL = `/api/oauth/token?client_id=app&client_secret=app_secure&grant_type=refresh_token&refresh_token=${sessionStorage.getItem('refresh_token')}`;

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 检查token是否失效
 * @param {*} url 
 * @param {*} option 
 * @param {*} res 
 */

 const getrefreshToken = async (url, option) => {
  fetch(refreshTokenURL, {method: 'POST'}).then(result =>{
    if(result.err){
      // refresh_token失效, 重新登录
      window.g_app._store.dispatch({
        type: 'login/logout',
      });
      return;
    }else{
      sessionStorage.setItem('access_token', result.access_token);
      sessionStorage.setItem('refresh_token', result.refresh_token);
      securityRequest(url, option);
    }
  });
}

const checkToken = (url, option, res) =>{
  if(res.error && res.error === 'invalid_token'){
    // token失效, 获取token
    fetch(refreshTokenURL, {method: 'POST'}).then(result =>{
      if(result.err){
        // refresh_token失效, 重新登录
        window.g_app._store.dispatch({
          type: 'login/logout',
        });
        return;
      }else{
        sessionStorage.setItem('access_token', result.access_token);
        sessionStorage.setItem('refresh_token', result.refresh_token);
        securityRequest(url, option);
      }
    });
  } else{
    return res;
  }
}

/**
 * 处理请求错误
 * @param {*} res 
 */
const handleError = (res) => {
  if((res.error && res.error !== 'invalid_token')/* || (res.code !== 200 && res.msg && res.msg !== 'invalid_token')*/){
    notificationTip(formatMessage({id: res.error || res.msg}));
    // notification.info({
    //   message: formatMessage({id: res.error || res.msg}),
    //   description: '',
    //   duration: 2,
    //   icon: <Icon type="frown" style={{ color: 'red' }} />
    // });
  }
  return res;
  /*if (response.status >= 200 && response.status < 600) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;*/
};

const cachedSave = (response, hashcode) => {
  /**
   * Clone a response data and store it in sessionStorage
   * Does not support data other than json, Cache only json
   */
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.match(/application\/json/i)) {
    // All data is saved as text
    response
      .clone()
      .text()
      .then(content => {
        sessionStorage.setItem(hashcode, content);
        sessionStorage.setItem(`${hashcode}:timestamp`, Date.now());
      });
  }
  return response;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(url, option) {
  const newOptions = handleParams(url, option);
  return (
    fetch(url, newOptions)
      //.then(handleError)
      //.then((response) => {checkToken(url, option, response)})
      //.then(response => cachedSave(response, hashcode))
      .then(response => {
        // DELETE and 204 do not return data by default
        // using .json will report an error.
        if (newOptions.method === 'DELETE' || response.status === 204) {
          return response.text();
        }
        return response.json();
      })
      .then(handleError)
      .catch(e => {
        const status = e.name;
        if (status === 401) {
          // @HACK
          /* eslint-disable no-underscore-dangle */
          window.g_app._store.dispatch({
            type: 'login/logout',
          });
          return;
        }
        // environment should not be used
        if (status === 403) {
          router.push('/exception/403');
          return;
        }
        if (status <= 504 && status >= 500) {
          router.push('/exception/500');
          return;
        }
        if (status >= 404 && status < 422) {
          router.push('/exception/404');
        }
      })
  );
}

/**
 * 需要登录后才发的请求
 * @param {*} url 
 * @param {*} option 
 */
export function securityRequest(url, option) {
  const newOptions = handleParams(url, option);
  const token = sessionStorage.getItem('access_token');
  //const token = '4bbab859-7797-4881-a802-d04bd5641f00';
  if(token){
    // 已登录
    if(url.indexOf('?') > -1) {
      url += `&access_token=${token}`;
    }else {
      url += `?access_token=${token}`;
    }
  }else{
   // 弹出登录框
   window.g_app._store.dispatch({
    type: 'login/setLoginModelVisible',
    visible: true
  });
  return;
  }
  return (
    fetch(url, newOptions)
      //.then((response) => {checkToken(url, option, response)})
      //.then(handleError)
      //.then(response => cachedSave(response, hashcode))
      .then(response => {
        // DELETE and 204 do not return data by default
        // using .json will report an error.
        if (newOptions.method === 'DELETE' || response.status === 204) {
          return response.text();
        }
        return response.json();
      })
      //.then((res) => {checkToken(url, option, res)})
      .then(handleError)
      .catch(e => {
        console.log(e);
      })
      // .catch(e => {
      //   const status = e.name;
      //   if (status === 401) {
      //     // @HACK
      //     /* eslint-disable no-underscore-dangle */
      //     window.g_app._store.dispatch({
      //       type: 'login/logout',
      //     });
      //     return;
      //   }
      //   // environment should not be used
      //   if (status === 403) {
      //     router.push('/exception/403');
      //     return;
      //   }
      //   if (status <= 504 && status >= 500) {
      //     router.push('/exception/500');
      //     return;
      //   }
      //   if (status >= 404 && status < 422) {
      //     router.push('/exception/404');
      //   }
      // })
  );

}

/**
 * 处理参数
 */
function handleParams(url, option) {
  const options = {
    expirys: isAntdPro(),
    ...option,
  };
  /**
   * Produce fingerprints based on url and parameters
   * Maybe url has the same parameters
   */
  const fingerprint = url + (options.body ? JSON.stringify(options.body) : '');
  const hashcode = hash
    .sha256()
    .update(fingerprint)
    .digest('hex');

  const defaultOptions = {
    mode: 'cors',
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }

  const expirys = options.expirys && 60;
  // options.expirys !== false, return the cache,
  if (options.expirys !== false) {
    const cached = sessionStorage.getItem(hashcode);
    const whenCached = sessionStorage.getItem(`${hashcode}:timestamp`);
    if (cached !== null && whenCached !== null) {
      const age = (Date.now() - whenCached) / 1000;
      if (age < expirys) {
        const response = new Response(new Blob([cached]));
        return response.json();
      }
      sessionStorage.removeItem(hashcode);
      sessionStorage.removeItem(`${hashcode}:timestamp`);
    }
  }
  return newOptions;
}