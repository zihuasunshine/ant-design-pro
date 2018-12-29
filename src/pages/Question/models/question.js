import { addQuestion, fileUpload, getQdetail, isVote, vote, comment, perfect } from '@/services/api';

export default {
  namespace: 'question',

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
    *getDetail({ id }, { call, put }) {
      const response = yield call(getQdetail, id);
      yield put({
        type: 'getDetailHandel',
        payload: response
      });
    },
    *isVote({ params }, { call, put }) {
      const response = yield call(isVote, params);
    },
    *vote({params}, { call }) {
      const response = yield call(vote, params);
    },
    *comment({params, token}, { call }) {
      const response = yield call(comment, params, token);
    },
    *perfectAnswer({params, token}, { call, pull }) {
      const response = yield call(perfect, params, token);
      yield put({
        type: 'perfectAnswerHandel',
        payload: response
      });
    }
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
    getDetailHandel(state, { payload }) {
      return {
        ...state,
        qDetailRes: payload
      }
    },
    perfectAnswer(state, { payload }) {
      return {
        ...state,
        pAnswerRes: payload
      }
    },
  },
};
