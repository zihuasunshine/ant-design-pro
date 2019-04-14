import { queryNotices, getProvince, getCpaTypes, getPgTypes, queryUser, feedback, fileUpload } from '@/services/api';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
    suggestModalVisible: false,
  },

  effects: {
    *setSuggestModal({ suggestModalVisible}, { put }) {
      yield put({
        type: 'changeSuggestModalVisible',
        payload: suggestModalVisible
      });
    },
    *getOtherUserInfo({ params }, { call, put }) {
      const response = yield call(queryUser, params);
      yield put({
        type: 'getOtherUserInfoHandle',
        payload: response
      });
    },
    *getPgjgTypes(_, { call, put }) {
      const response = yield call(getPgTypes);
      yield put({
        type: 'pgjgTypesHandel',
        payload: response
      });
    },
    *getCpaTypes(_, { call, put }) {
      const response = yield call(getCpaTypes);
      yield put({
        type: 'typesHandel',
        payload: response
      });
    },
    *getProvince(_, { call, put }) {
      const response = yield call(getProvince);
      yield put({
        type: 'provinceHandle',
        payload:response
      });
    },
    *fetchNotices(_, { call, put, select }) {
      const data = yield call(queryNotices);
      yield put({
        type: 'saveNotices',
        payload: data,
      });
      const unreadCount = yield select(
        state => state.global.notices.filter(item => !item.read).length
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: data.length,
          unreadCount,
        },
      });
    },
    *clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count = yield select(state => state.global.notices.length);
      const unreadCount = yield select(
        state => state.global.notices.filter(item => !item.read).length
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: count,
          unreadCount,
        },
      });
    },
    *changeNoticeReadState({ payload }, { put, select }) {
      const notices = yield select(state =>
        state.global.notices.map(item => {
          const notice = { ...item };
          if (notice.id === payload) {
            notice.read = true;
          }
          return notice;
        })
      );
      yield put({
        type: 'saveNotices',
        payload: notices,
      });
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: notices.length,
          unreadCount: notices.filter(item => !item.read).length,
        },
      });
    },
    *feedback({ payload }, { put, call }) {
      const response = yield call(feedback, payload);
      yield put({
        type: 'feedbackHandle',
        payload: response
      });
    },
    *upload({ payload }, { call, put }) {
      const response = yield call(fileUpload, payload);
      yield put({
        type: 'uploadHandle',
        payload: response,
      });
    },
  },

  reducers: {
    changeSuggestModalVisible(state, { payload }) {
      return {
        ...state,
        suggestModalVisible: payload
      }
    },
    getOtherUserInfoHandle(state, { payload }) {
      return {
        ...state,
        otherUserRes: payload,
      };        
    },
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state, { payload }) {
      return {
        ...state,
        notices: state.notices.filter(item => item.type !== payload),
      };
    },
    provinceHandle(state, { payload }) {
      return {
        ...state,
        provinceRes: payload
      }
    },
    typesHandel(state, { payload }) {
      return {
        ...state,
        typeRes: payload
      }
    },
    pgjgTypesHandel(state, { payload }) {
      return {
        ...state,
        pgjgTypeRes: payload
      }
    },
    feedbackHandle(state, { payload }) {
      return {
        ...state,
        feedbackRes: payload
      }
    },
    uploadHandle(state, { payload }) {
      return {
        ...state,
        uploadRes: payload,
      };
    },
  },

  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
