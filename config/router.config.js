//const width = window.screen.availWidth;
//const isMobile = width < 599? true : false;
//console.log(this);
//import { isMobile } from '@/utils/utils';

export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/findpwd', component: './User/FindPassword' },
      { path: '/user/modifypwd', component: './User/ModifyPassword' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      { path: '/', redirect: '/university' },
      // { path: '/', redirect: '/home' },
      // {
      //   name: 'home',
      //   icon: 'home',
      //   path: '/home',
      //   routes: [
      //     {
      //       path: '/home',
      //       component: './Index',
      //     },
      //     {
      //       path: '/article/:id',
      //       component: './Index/ArticleDetail',
      //     },
      //   ],
      // },
      // {
      //   icon: 'question-circle',
      //   name: 'question',
      //   path: '/question',
      //   routes: [
      //     {
      //       path: '/question',
      //       component: './Question/Ask',
      //     },
      //     {
      //       path: '/question/ask',
      //       component: './Question/Ask',
      //     },
      //     {
      //       path: '/question/answer/:id',
      //       component: './Question/Answer',
      //     },
      //   ],
      // },
      {
        icon: 'retweet',
        name: 'adjust',
        path: '/adjust',
        routes: [
          {
            path: '/adjust',
            component: './Adjust',
          },
          {
            path: '/adjust/detail/:id',
            component: './Adjust/Detail',
          },
        ],
      },
      {
        icon: 'search',
        name: 'university',
        path: '/university',
        routes: [
          {
            path: '/university',
            component: './University',
          },
        ],
      },
      {
        icon: 'form',
        name: 'pgjg',
        path: '/pgjg',
        routes: [
          {
            path: '/pgjg',
            component: './PGJG',
          },
        ],
      },
      {
        icon: 'form',
        name: 'cpa',
        path: '/cpa',
        routes: [
          {
            path: '/cpa',
            component: './CPA',
          },
        ],
      },
      {
        icon: 'line-chart',
        name: 'score',
        path: '/score',
        routes: [
          {
            path: '/score',
            component: './Score/NationalLine',
          },
        ],
      },
      {
        icon: 'line-chart',
        name: 'reexamine',
        path: '/reexamine',
        routes: [
          {
            path: '/reexamine',
            component: './Score/CrossedLine',
          },
        ],
      },
      {
        //name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            //name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/myQuestion',
              },
              {
                path: '/account/center/myPlease',
                component: './Account/Center/MyPlease',
              },
              {
                path: '/account/center/myQuestion',
                component: './Account/Center/MyQuestions',
              },
              {
                path: '/account/center/myAnswer',
                component: './Account/Center/MyAnswers',
              },
              {
                path: '/account/center/myFocus',
                component: './Account/Center/myFocus',
              },
            ],
          },
          {
            path: '/account/settings',
            //name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
              {
                path: '/account/settings/test',
                component: './Account/Settings/Test',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
