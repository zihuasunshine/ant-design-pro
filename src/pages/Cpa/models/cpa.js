import { getCpaList } from '@/services/api';

export default {
  namespace: 'cpa',

  state: {
    current: 1,
    loading: true,
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
    *getCpaList({ params }, { call, put }) {
      const response = yield call(getCpaList, params);
      yield put({
        type: 'cpatDataHandle',
        payload: response,
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
    cpatDataHandle(state, { payload, loading, params }) {
      return {
        ...state,
        cpaDataRes: payload,
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
