import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { login, getLoginCode, refreshToken } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'login',

  state: {
    status: undefined,
    modalVisible: false,
    modalType: '',
    loginRes: {}
  },

  effects: {
    *setModalType({ modalType, visible }, {  put }) {
      yield put({
        type: 'changeModalVisible',
        payload: {modalType, visible}
      });
    },
    *login({ payload }, { call, put }) {
      const { type } = payload;
      const response = yield call(login, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (!response.error) {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        // if(dialogCls){
        //   // 弹窗登录 页面不跳转
        //   yield put({
        //     type: 'changeModalVisible',
        //     payload: false
        //   });
        // }else {
        //   reloadAuthorized();
        //   const urlParams = new URL(window.location.href);
        //   const params = getPageQuery();
        //   let { redirect } = params;
        //   if (redirect) {
        //     const redirectUrlParams = new URL(redirect);
        //     if (redirectUrlParams.origin === urlParams.origin) {
        //       redirect = redirect.substr(urlParams.origin.length);
        //       if (redirect.match(/^\/.*#/)) {
        //         redirect = redirect.substr(redirect.indexOf('#') + 1);
        //       }
        //     } else {
        //       window.location.href = redirect;
        //       return;
        //     }
        //   }
        //   yield put(routerRedux.replace(redirect || '/'));
        // }
      }
    },

    *getCaptcha({ params }, { call, put }) {
      yield call(getLoginCode, params);
      put({
        type: 'captchaHandler',
      });
    },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      // 退出登录后 跳转到首页
      yield put(
        routerRedux.push({
          pathname: '/',
          // pathname: window.location.pathname,
          // search: stringify({
          //   redirect: window.location.href,
          // }),
        })
      );
      /*yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );*/
    },
  },

  reducers: {
   
    changeLoginStatus(state, { payload }) {
      //setAuthority(payload.currentAuthority);
      setAuthority('admin');
      return {
        ...state,
        loginRes: payload,
      };
    },
    changeModalVisible(state, { payload }) {
      const { visible, modalType } = payload;
      return {
        ...state,
        modalVisible: visible,
        modalType
      }
    },
  },
};
