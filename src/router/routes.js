export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: _ => import(/* webpackChunkName: "login-view" */'../components/TheLogin.vue'),
    name: 'login'
  }
]
