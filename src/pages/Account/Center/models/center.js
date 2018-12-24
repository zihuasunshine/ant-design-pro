import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { addTag, deleteTag, refreshToken } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'center',

  state: {
    status: undefined,
  },

  effects: {
    *addTag({ tag, token }, { call, put }) {
      const response = yield call(addTag, tag, token);
      yield put({
        type: 'addTagHandle',
        payload: response
      });
    },
    *deleteTag({ tagId, token }, { call, put }) {
      const response = yield call(deleteTag, tagId, token);
      yield put({
        type: 'deleteTagHandle',
        payload: response
      });
    }
  },

  reducers: {
    addTagHandle(state, { payload }) {
      return {
        ...state,
        addTagRes: payload
      }
    },
    deleteTagHandle(state, { payload }) {
      return {
        ...state,
        deleteTagRes: payload
      }
    }
  },
};
