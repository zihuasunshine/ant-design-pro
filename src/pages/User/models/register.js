import { register, sendSMSCode } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'register',

  state: {
    status: undefined,
  },

  effects: {
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
  },
};
