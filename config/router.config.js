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
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {path: '/', redirect: '/home'},
      {
        name: 'home',
        icon: 'home',
        path: '/home',
        routes: [
          {
            path: '/home',
            //name: 'center',
            component: './Dashboard/Home',
          },
          {
            path: '/article/:id',
            component: './Dashboard/ArticleDetail'
          },
        ]
      },
      // forms
      {
        icon: 'question-circle',
        name: 'question',
        path: '/question',
        routes: [
          {
            path: '/question',
            //name: 'center',
            component: './Question/Ask',
          },
          {
            path: '/question/ask',
            //name: 'askQuestion',
            component: './Question/Ask',
          },
          {
            path: '/question/answer/:id',
            //name: 'askQuestion',
            component: './Question/Answer',
          },
        ],
      },
      {
        path: '/profile',
        //name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
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
                path: '/account/center/waitAnswer',
                component: './Account/Center/WaitAnswer',
              },
              {
                path: '/account/center/myQuestion',
                component: './Account/Center/Questions',
              },
              {
                path: '/account/center/myAnswer',
                component: './Account/Center/MyAnswers',
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
