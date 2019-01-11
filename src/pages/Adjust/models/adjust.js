import { getAdjustData } from '@/services/api';

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
    }
  },
};
