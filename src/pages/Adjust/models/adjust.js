import { getAdjustData, getAdjustDetail, getAdjustRecommended } from '@/services/api';

export default {
  namespace: 'adjust',

  state: {
    current: 1,
    loading: true,
    params: {}
  },

  effects: {
    *setCurrent({ current }, { put }) {
      yield put({
        type: 'currentHandle',
        current
      });
    },
    *loading({ loading }, { put }) {
      yield put({
        type: 'loadingHandle',
        loading
      });
    },
    *getAdjustData({ params }, { call, put }) {
      const response = yield call(getAdjustData, params);
      yield put({
        type: 'adjustDataHandle',
        payload: response,
        params,
        loading: false
      });
    },
    *getDetail({ params }, { call, put }) {
      const response = yield call(getAdjustDetail, params);
      yield put({
        type: 'adjustDetailHandle',
        payload: response,
      });
    },
    *getAdjustRecommended({ params }, { call, put}) {
      const response = yield call(getAdjustRecommended, params);
      yield put({
        type: 'recommendHandle',
        payload: response,
      });
    }
  },

  reducers: {
    adjustDataHandle(state, { payload, loading, params }) {
      return {
        ...state,
        adjustDataRes: payload,
        loading,
        params
      };
    },
    adjustDetailHandle(state, { payload }) {
      return {
        ...state,
        adjustDetailRes: payload,
      };
    },
    recommendHandle(state, { payload }) {
      return {
        ...state,
        recommendRes: payload,
      };
    },
    loadingHandle(state, { loading }) {
      return {
        ...state,
        loading
      }
    }, 
    currentHandle(state, {current }) {
      return {
        ...state,
        current
      }
    },
  },
};
