import { search, articleList, articleDetail, category } from '@/services/api';

export default {
  namespace: 'home',

  state: {
    list: [],
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
      const response = yield call(search, params);
      yield put({
        type: 'saveList',
        payload: response,
      });
    },
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
    saveList(state, { payload }) {
      return {
        ...state,
        list: payload,
      };
    },
  },
};
