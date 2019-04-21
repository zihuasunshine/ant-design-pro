import { login, register, sendSMSCode, isMobileExisted, isUserNameExisted } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
    *checkUserMobileExisted({ payload }, { call, put }) {
      const response = yield call(isMobileExisted, payload);
      yield put({
        type: 'checkMobileHandle',
        payload: response
      });
    },
    *checkUserNameExisted({ payload }, { call, put }) {
      const response = yield call(isUserNameExisted, payload);
      yield put({
        type: 'checkUserNameHandle',
        payload: response
      });
    },
    *getSMSCode({ payload }, { call, put }) {
      const response = yield call(sendSMSCode, payload);
      yield put({
        type: 'SMSCodeHandle',
        payload: response,
      });
    },
    *submit({ payload }, { call, put }) {
      const response = yield call(register, payload);
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
    *login({ payload }, { call, put }) {
      const { type } = payload;
      const response = yield call(login, payload);
      // yield put({
      //   type: 'changeLoginStatus',
      //   payload: response,
      // });
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
  },

  reducers: {
    SMSCodeHandle(state, { payload }) {
      return {
        ...state,
        codeRes: payload,
      };
    },
    registerHandle(state, { payload }) {
      setAuthority('user');
      reloadAuthorized();
      return {
        ...state,
        registerRes: payload,
      };
    },
    checkMobileHandle(state, { payload }) {
      return {
        ...state,
        checkMobileRes: payload,
      };
    },
    checkUserNameHandle(state, { payload }) {
      return {
        ...state,
        checkUserNameRes: payload,
      };
    },
  },
};
