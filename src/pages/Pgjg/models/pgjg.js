import { getPgjgListById, getPgjgListBySchool } from '@/services/api';

export default {
  namespace: 'pgjg',

  state: {

  },

  effects: {
    *getPgjgListById({ params }, { call, put }) {
      const response = yield call(getPgjgListById, params);
      yield put({
        type: 'pgjgList1Handle',
        payload: response
      });
    },
    *getPgjgListBySchool({ params }, { call, put }) {
      const response = yield call(getPgjgListBySchool, params);
      yield put({
        type: 'pgjgList2Handle',
        payload: response
      });
    },
  },

  reducers: {
    pgjgList1Handle(state, { payload }) {
      return {
        ...state,
        pgjgList1Res: payload,
      };
    },
    pgjgList2Handle(state, { payload }) {
      return {
        ...state,
        pgjgList2Res: payload,
      };
    },
  }
};
