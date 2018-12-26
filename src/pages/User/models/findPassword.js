import { doReset, sendVerifyCode, modifyPassword } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'findpwd',

  state: {
    status: undefined,
  },

  effects: {
    *getSMSCode({ payload }, { call, put }) {
      const response = yield call(sendVerifyCode, payload);
      yield put({
        type: 'SMSCodeHandle',
        payload: response,
      });
    },
    *submit({ payload }, { call, put }) {
      const response = yield call(doReset, payload);
      yield put({
        type: 'resetHandle',
        payload: response,
      });
    },
    *modifyPwd({ payload, token }, { call, put }) {
      const response = yield call(modifyPassword, payload, token);
      yield put({
        type: 'modifyPwdHandle',
        payload: response,
      });
    },
  },

  reducers: {
    SMSCodeHandle(state, { payload }) {
      return {
        ...state,
        codeRes: payload,
      };
    },
    resetHandle(state, { payload }) {
      setAuthority('user');
      reloadAuthorized();
      return {
        ...state,
        findpwdRes: payload,
      };
    },
    modifyPwdHandle(state, { payload }) {
      return {
        ...state,
        modifyPwdRes: payload,
      };
    },
  },
};
