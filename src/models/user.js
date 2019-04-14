import { currentUser } from '@/services/api';

export default {
  namespace: 'user',

  state: {
    currentUserRes: {},
  },

  effects: {
    *fetchCurrent({ }, { call, put }) {
      const response = yield call(currentUser);
      if(!response.error){
        let user = response.data;
        sessionStorage.setItem('user', JSON.stringify(response.data));
      }
      yield put({
        type: 'currentUserHandle',
        payload: response,
      });
    },
  },

  reducers: {
    currentUserHandle(state, { payload }) {
      return {
        ...state,
        currentUserRes: payload,
      };
    },
  },
};
