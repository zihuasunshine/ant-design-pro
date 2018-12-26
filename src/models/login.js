import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { login, getLoginCode, refreshToken } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *refreshToken({ refresh_token }, { call, put }) {
      const response = yield call(refreshToken, refresh_token);
      if (!response.error) {
        sessionStorage.setItem('access_token', response.access_token);
        sessionStorage.setItem('refresh_token', response.refresh_token);
      }
      yield put({
        type: 'refreshTokenHandle',
        payload: response,
      });
    },
    *login({ payload }, { call, put }) {
      const { type } = payload;
      const response = yield call(login, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (!response.error) {
        sessionStorage.setItem('access_token', response.access_token);
        sessionStorage.setItem('refresh_token', response.refresh_token);
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
    },

    *getCaptcha({ payload }, { call, put }) {
      yield call(getLoginCode, payload);
      put({
        type: 'captchaHandler',
        payload: response,
      });
    },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: window.location.pathname,
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
      /*yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );*/
    },
  },

  reducers: {
    refreshTokenHandle(state, { payload }) {
      return {
        ...state,
        refreshTokenRes: payload,
      };
    },
    changeLoginStatus(state, { payload }) {
      //setAuthority(payload.currentAuthority);
      setAuthority('admin');
      return {
        ...state,
        loginRes: payload,
      };
    },
    captchaHandler(state, { payload }) {
      return {
        ...state,
        captchaRes: payload,
      };
    },
  },
};
