import { search } from '@/services/api';

export default {
  namespace: 'home',

  state: {
    list: [],
  },

  effects: {
    *fetchList({ params }, { call, put }) {
      const response = yield call(search, params);
      yield put({
        type: 'saveList',
        payload: response,
      });
    },
  },

  reducers: {
    saveList(state, { payload }) {
      return {
        ...state,
        list: payload,
      };
    },
  },
};
