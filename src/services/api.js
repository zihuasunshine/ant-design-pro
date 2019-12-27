import { stringify } from 'qs';
import {request, securityRequest } from '@/utils/request';

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

// 登录获取短信验证码
export async function getLoginCode(params) {
  const { mobile, resultCode, token } = params;
  return request(`/api/login/sendSMS/${mobile}?token=${token}&resultCode=${resultCode}`);
}

// 账号密码登录
export async function login(params) {
  const { type } = params;
  if (type === 'account') {
    // 账号密码登录
    const { userName, password } = params;
    return request(
      `/api/oauth/token?client_id=app&client_secret=app_secure&grant_type=password&username=${userName}&password=${password}`,
      {
        method: 'POST',
      }
    );
  } else {
    // 短信验证码登录
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
export async function modifyPassword(params) {
  const { oldPassword, password, confirm } = params;
  return securityRequest(
    `/api/user/modifyPassword/${oldPassword}/${password}/${confirm}`,
    {
      method: 'POST',
    }
  );
}

// 获取当前登录用户信息
export async function currentUser() {
  return securityRequest(`/api/user/currentUser`);
}

// 修改用户信息
export async function modifyUserInfo(params) {
  let strParams = Object.keys(params).length > 0 ? '&' : '';
  for (let key in params) {
    strParams += key + '=' + params[key] + '&';
  }
  return securityRequest(
    `/api/user/modifyUserInfo?${strParams.slice(0, strParams.length - 1)}`,
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
  const { file } = params;
  const formData = new FormData();
  formData.append('file', file);
  return securityRequest(`/api/file/uploadAvatar`, {
    method: 'POST',
    body: formData,
  });
}

// 添加问题
export async function addQuestion(params) {
  return securityRequest(`/api/question/add`, {
    method: 'POST',
    body: params,
  });
}

// 修改问题
export async function editQuestion(params) {
  return securityRequest(`/api/question/edit`, {
    method: 'POST',
    body: params
  });
}

// 关注问题
export async function focus(params) {
  const { questionId, type } = params;
  return securityRequest(`/api/question/focus?questionId=${questionId}&type=${type}`, {
    method: 'POST'
  });
}

// 分享问题
export async function share(params) {
  const { questionId, shareUid } = params;
  return securityRequest(`/api/question/share?questionId=${questionId}&shareUid=${shareUid}`, {
    method: 'POST'
  });
}

// 添加标签
export async function addTag(tag) {
  return securityRequest(`/api/user/tag/add?tag=${tag}`, {
    method: 'POST',
  });
}

// 删除标签
export async function deleteTag(tagId) {
  return securityRequest(`/api/user/tag/delete/${tagId}`);
}

// 我的提问
export async function myQuestion(params) {
  const { userId } = params;
  return securityRequest(`/api/question/u/${userId}`);
}

// 我的回答
export async function myAnswer(params) {
  const { pageNo, pageSize} = params;
  return securityRequest(`/api/answer/findAnswerByUid?pageNo=${pageNo}&pageSize=${pageSize}`);
}

// 我的关注
export async function myFocus(params) {
  const { state } = params;
  return securityRequest(`/api/question/focus/list?state=${state}`);
}

// 我的请求完善列表
export async function myPlease(params){
  const { state, pageno, pageSize } = params;
  return securityRequest(`/api/perfect/list?state=${state}&pageno=${pageno}&pageSize=${pageSize}`);
}

// 查询用户对指定答案是否点赞或点踩
export async function isVote(params) {
  const { answerId } = params;
  return securityRequest(`/api/answer/getVoteValue/${answerId}`);
}

// 查询用户对问题是否关注
export async function isFocus(params) {
  const { questionId } = params;
  return securityRequest(`/api/question/isFocus?questionId=${questionId}`)
}

// 给回答答案点赞或点踩
export async function vote(params) {
  const { answerId, voteValue } = params;
  return securityRequest(`/api/answer/vote/${answerId}/${voteValue}`);
}

// 回答问题
export async function answer(params) {
  const { questionId, content } = params;
  return securityRequest(
    `/api/answer/answerQuestion/${questionId}?answerContent=${content}`,
    {
      method: 'POST',
    }
  );
}

// 完善问题
export async function perfect(params) {
  const { answerId, reason, perfectAnswer } = params;
  return securityRequest(`/api/perfect/add/${answerId}`, {
    method: 'POST',
    body: {
      reason,
      perfectAnswer
    }
  });
}

// 评论回答
export async function comment(params) {
  const { answerId, message, commentId } = params;
  const url = commentId?`/api/answer/comment/${answerId}?message=${message}&commentId=${commentId}`:
    `/api/answer/comment/${answerId}?message=${message}`;
  return securityRequest(url, {
    method: 'POST',
  });
}

// 修改评论
export async function modifyComment(params) {
  const { commentId, message } = params;
  return securityRequest(`/api/answer/updateComment/${commentId}?message=${message}`, {
    method: 'POST'
  });
}

// 删除评论
export async function deleteComment(params) {
  const { commentId } = params;
  return securityRequest(`/api/answer/deleteComment/${commentId}`, {
    method: 'POST'
  });
}

// 查询问题列表
export async function search(params) {
  return request(`/search/search-qa/`, {
    method: 'POST',
    body: params,
  });
}

// 问题详情
export async function getQdetail(id) {
  return request(`/api/question/${id}`);
}

// 根据答案ID查询该答案下的所有评论
export async function getComment(params) {
  const { answerId } = params;
  return request(`/api/answer/findByAnswerId/${answerId}`);
}

// 查看更多评论
export async function getMoreComment(params) {
  const { id } = params;
  return request(`/api/answer/findMoreComment/${id}`);
}

// 文章列表
export async function articleList() {
  return request(`/api/article/daily`);
}

// 文章详情
export async function articleDetail(id) {
  return request(`/api/article/${id}`);
}

// 问题分类
export async function category(params) {
  const { pId } = params;
  return request(pId?`/api/question/category?pid=${pId}`:`/api/question/category`);
}

// 查询用户
export async function queryUser(params) {
  const { uid } = params;
  return request(`/api/user/${uid}`);
}

// 判断手机号是否已存在
export async function isMobileExisted(params) {
  const { mobile } = params;
  return request(`/api/user/checkUserMobileExisting/${mobile}`);
}

// 判断用户名是否已存在
export async function isUserNameExisted(params) {
  const { userName } = params;
  return request(`/api/user/checkUserNameExisting/${userName}`);
}

// 获取省份
export async function getProvince() {
  return request(`/api/xzqh/provinces`);
}

// 获取调剂信息
export async function getAdjustData(params) {
  let strParams = Object.keys(params).length > 0 ? '?' : '';
  for (let key in params) {
    strParams += key + '=' + params[key] + '&';
  }
  return request(`/api/schInfo/tjxx${strParams.slice(0, strParams.length - 1)}`);
}

// 获取调剂信息详情
export async function getAdjustDetail(params) {
  const { id } = params;
  return request(`/api/schInfo/${id}`);
}

// 调剂信息详情页推荐列表
export async function getAdjustRecommended(params) {
  const { id } = params;
  return request(`/api/schInfo/recommendedList?id=${id}`);
}

// 专业评估类别
export async function getCpaTypes() {
  return request(`/api/cpa/list`);
}

// 专业评估信息
export async function getCpaList(params) {
  const { code } = params;
  return request(`/api/cpa?code=${code}`);
}

// 学科评估类别
export async function getPgTypes() {
  return request(`/api/pgjg/categories`);
}

// 学科评估按学科id查询列表
export async function getPgjgListById(params) {
  const { id } = params;
  return request(`/api/pgjg?id=${id}`);
}

// 学科评估按学校名称查询列表
export async function getPgjgListBySchool(params) {
  const { name } = params;
  return request(`/api/pgjg/sch?name=${name}`);
}

// 高校查询
export async function getUniversityInfo(params) {
  const { key, word } = params;
  return request(`/api/school?k=${key}&w=${word}`);
}

// 意见反馈
export async function feedback(params) {
  if(localStorage.getItem('access_token')) {
    return securityRequest(`/api/feedback`, {
      method: 'POST',
      body: {
        ...params
      }
    });
  }else {
    return request(`/api/feedback`, {
      method: 'POST',
      body: {
        ...params
      }
    });
  }
}
