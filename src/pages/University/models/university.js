import { getUniversityInfo } from '@/services/api';

export default {
  namespace: 'university',

  state: {

  },

  effects: {
    *getUniversityInfo({ params }, { call, put }) {
      const response = yield call(getUniversityInfo, params);
      yield put({
        type: 'university1Handle',
        payload: response
      });
    },
  },

  reducers: {
    university1Handle(state, { payload }) {
      return {
        ...state,
        universityRes: payload,
      };
    },
  }
};
