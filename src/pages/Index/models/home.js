import { search, articleList, articleDetail, category } from '@/services/api';

export default {
  namespace: 'home',

  state: {
    category: {}
  },

  effects: {
    *category({ params }, { call, put}) {
      const response = yield call(category, params);
      yield put({
        type: 'categoryHandle',
        payload: response
      });
    },
    *articleList({}, { call, put }) {
      const response = yield call(articleList);
      yield put({
        type: 'articleListHandle',
        payload: response
      });
    },
    *articleDetail({ id }, { call, put }) {
      const response = yield call(articleDetail, id);
      yield put({
        type: 'articleDetailHandle',
        payload: response
      });
    },
    *fetchList({ params }, { call, put }) {
      const { flag } = params;
      const response = yield call(search, params);
      yield put({
        type: 'saveList',
        payload: response,
        flag,
      });
    },
    *getCategoryParam({ params }, { put }) {
      yield put({
        type: 'setCategoryParam',
        payload: params
      });
    }
  },

  reducers: {
    categoryHandle(state, { payload }) {
      return {
        ...state,
        categoryRes: payload,
      };
    },
    articleListHandle(state, { payload }) {
      return {
        ...state,
        articlelistRes: payload,
      };
    },
    articleDetailHandle(state, { payload }) {
      return {
        ...state,
        articleDetailRes: payload,
      };
    },
    saveList(state, { payload, flag }) {
      if(flag){
        const { listRes } = state;
        const preList = listRes && listRes.code === 200? listRes.data:[];
        const nowList = payload && payload.code === 200? payload.data:[];
        payload.data = payload && payload.code === 200?  [...preList, ...nowList]:[...preList];
      }
      return {
        ...state,
        listRes: payload,
      };
    },
    setCategoryParam(state, { payload }) {
      return {
        ...state,
        category: payload
      }
    }
  },
};
