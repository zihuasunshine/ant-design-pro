import { modifyUserInfo, uploadAvatar } from '@/services/api';

export default {
  namespace: 'baseView',

  state: {},

  effects: {
    *uploadAvatar({ params }, { call, put }) {
      const response = yield call(uploadAvatar, params);
      yield put({
        type: 'uploadAvatarHandle',
        payload: response,
      });
    },
    *submit({ payload, token }, { call, put }) {
      const response = yield call(modifyUserInfo, payload, token);
      yield put({
        type: 'userInfoHandle',
        payload: response,
      });
    },
  },

  reducers: {
    uploadAvatarHandle(state, { payload }) {
      return {
        ...state,
        uploadImgRes: payload,
      };
    },
    userInfoHandle(state, { payload }) {
      return {
        ...state,
        updateRes: payload,
      };
    },
  },
};
