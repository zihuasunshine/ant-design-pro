import { addQuestion, fileUpload, getQdetail, isVote, getComment,getMoreComment,vote, comment, perfect, answer } from '@/services/api';

export default {
  namespace: 'question',

  state: {
    moreCommentRes: {}
  },

  effects: {
    *upload({ payload }, { call, put }) {
      const response = yield call(fileUpload, payload);
      yield put({
        type: 'uploadHandle',
        payload: response,
      });
    },
    *submit({ payload}, { call, put }) {
      const response = yield call(addQuestion, payload);
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
      yield put({
        type: 'isVoteHandle',
        payload: response
      });
    },
    *getComment({params}, {call, put}) {
      const response = yield call(getComment, params);
      yield put({
        type: 'getCommentHandle',
        payload: response
      });
    },
    *getMoreComment({ params }, {call, put}) {
      const response = yield call(getMoreComment,params);
      yield put({
        type: 'getMoreCommentHandle',
        payload: response
      });
    },
    *vote({params}, { call, put }) {
      const response = yield call(vote, params);
      yield put({
        type: 'voteHandle',
        payload: response,
      });
    },
    *comment({params}, { call, put }) {
      const response = yield call(comment, params);
      yield put({
        type: 'commentHandle',
        payload: response,
      });
    },
    *perfectAnswer({params}, { call, put }) {
      const response = yield call(perfect, params);
      yield put({
        type: 'perfectAnswerHandle',
        payload: response
      });
    },
    *answer({params}, { call, put }) {
      const response = yield call(answer, params);
      yield put({
        type: 'answerHandle',
        payload: response
      });
    },
    *destory({}, { put }) {
      yield put({
        type: 'destroyHandle',
        payload: {
          moreCommentRes: {}
        }
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
    perfectAnswerHandle(state, { payload }) {
      return {
        ...state,
        pAnswerRes: payload
      }
    },
    answerHandle(state, { payload }){
      return {
        ...state,
        answerRes: payload
      }
    },
    isVoteHandle(state, { payload }) {
      return {
        ...state,
        isVoteRes: payload
      }
    },
    voteHandle(state, { payload }) {
      return {
        ...state,
        voteRes: payload
      }
    },
    commentHandle(state, { payload }) {
      return {
        ...state,
        commentedRes: payload
      }
    },
    getCommentHandle(state, { payload }) {
      return {
        ...state,
        commentRes: payload
      }
    },
    getMoreCommentHandle(state, { payload }) {
      return {
        ...state,
        moreCommentRes: payload
      }
    },
    destroyHandle(state, { payload }) {
      return {
       ...payload
      }
    }
  },
};
