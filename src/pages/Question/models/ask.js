import { addQuestion, fileUpload } from '@/services/api';

export default {
  namespace: 'ask',

  state: {},

  effects: {
    *upload({ payload }, { call, put }) {
      const response = yield call(fileUpload, payload);
      yield put({
        type: 'uploadHandle',
        payload: response,
      });
    },
    *submit({ payload, token }, { call, put }) {
      const response = yield call(addQuestion, payload, token);
      yield put({
        type: 'addQuestionHandle',
        payload: response,
      });
    },
  },

  reducers: {
    uploadHandle(state, { payload }) {
      return {
        ...state,
        uploadRes: payload,
      };
    },
    addQuestionHandle(state, { payload }) {
      return {
        ...state,
        addQuestionRes: payload,
      };
    },
  },
};
