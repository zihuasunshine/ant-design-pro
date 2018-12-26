import { stringify } from 'qs';
import request from '@/utils/request';

export const imgCodeURL = '/api/getVerificationCodeImg';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}

// ================新增=================== //
// 重新获取token
export async function refreshToken(refreshToken) {
  return request(
    `/api/oauth/token?client_id=app&client_secret=app_secure&grant_type=refresh_token&refresh_token=${refreshToken}`,
    {
      method: 'POST',
    }
  );
}

// 获取短信验证码
export async function sendSMSCode(params) {
  const { mobile, token, resultCode } = params;
  return request(`/api/register/sendSMSCode/${mobile}?token=${token}&resultCode=${resultCode}`);
}

// 注册
export async function register(params) {
  const { mobile, password, verifycode, userName } = params;
  return request(`/api/register/${mobile}/${password}/${verifycode}?userName=${userName}`, {
    method: 'POST',
  });
}

// 登陆获取短信验证码
export async function getLoginCode(mobile) {
  return request(`/api/login/sendSMS/${mobile}`);
}

// 账号密码登陆
export async function login(params) {
  const { type } = params;
  if (type === 'account') {
    // 账号密码登陆
    const { userName, password } = params;
    return request(
      `/api/oauth/token?client_id=app&client_secret=app_secure&grant_type=password&username=${userName}&password=${password}`,
      {
        method: 'POST',
      }
    );
  } else {
    // 短信验证码登陆
    const { mobile, captcha } = params;
    return request(
      `/api/oauth/token?client_id=app&client_secret=app_secure&grant_type=password&username=${mobile}&password=${captcha}&loginWay=1`,
      {
        method: 'POST',
      }
    );
  }
}

// 重置密码-发送短信验证码
export async function sendVerifyCode(params) {
  const { mobile, token, resultCode } = params;
  return request(`/api/pwd/reset/sendVerifyCode/${mobile}?token=${token}&resultCode=${resultCode}`);
}

// 找回密码
export async function doReset(params) {
  const { mobile, verifycode, password } = params;
  return request(`/api/pwd/reset/doReset/${mobile}/${verifycode}/${password}`);
}

// 修改密码
export async function modifyPassword(params, token) {
  const { oldPassword, password, confirm } = params;
  return request(
    `/api/user/modifyPassword/${oldPassword}/${password}/${confirm}?access_token=${token}`,
    {
      method: 'POST',
    }
  );
}

// 获取当前登陆用户信息
export async function currentUser(token) {
  return request(`/api/user/currentUser?access_token=${token}`);
}

// 修改用户信息
export async function modifyUserInfo(params, token) {
  let strParams = Object.keys(params).length > 0 ? '&' : '';
  for (let key in params) {
    strParams += key + '=' + params[key] + '&';
  }
  console.log(params);
  console.log(strParams);
  return request(
    `/api/user/modifyUserInfo?access_token=${token}${strParams.slice(0, strParams.length - 1)}`,
    {
      method: 'POST',
    }
  );
}

// 文件上传
export async function fileUpload(params) {
  const { type, file } = params;
  const formData = new FormData();
  formData.append('file', file);
  return request(`/api/file/upload?type=${type}`, {
    method: 'POST',
    body: formData,
  });
}

// 更新头像
export async function uploadAvatar(params) {
  const { token, file } = params;
  const formData = new FormData();
  formData.append('file', file);
  return request(`/api/file/uploadAvatar?access_token=${token}`, {
    method: 'POST',
    body: formData,
  });
}

// 添加问题
export async function addQuestion(params, token) {
  return request(`/api/question/add?access_token=${token}`, {
    method: 'POST',
    body: params,
  });
}

// 添加标签
export async function addTag(tag, token) {
  return request(`/api/user/tag/add?tag=${tag}&access_token=${token}`, {
    method: 'POST',
  });
}

// 删除标签
export async function deleteTag(tagId, token) {
  return request(`/api/user/tag/delete/${tagId}?access_token=${token}`);
}

// 给回答答案点赞或点踩
export async function vote(params, token) {
  const { answerId, voteValue } = params;
  return request(`/api/answer/vote/${answerId}/${voteValue}?access_token=${token}`);
}

// 回答问题
export async function answer(params, token) {
  const { questionId, content } = params;
  return request(
    `/api/answer/answerQuestion/${questionId}?answerContent=${content}&access_token=${token}`,
    {
      method: 'POST',
    }
  );
}

// 评论回答
export async function comment(params, token) {
  const { answerId, message } = params;
  return request(`/api/answer/comment/${answerId}?message=${message}&access_token=${token}`, {
    method: 'POST',
  });
}

// 查询问题列表
export async function search(params) {
  return request(`/search/search-qa/`, {
    method: 'POST',
    body: params,
  });
}
