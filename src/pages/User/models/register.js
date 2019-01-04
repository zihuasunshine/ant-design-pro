import { register, sendSMSCode, isMobileExisted, isUserNameExisted } from '@/services/api';
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
