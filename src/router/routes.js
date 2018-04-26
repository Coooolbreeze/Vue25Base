export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: _ => import(/* webpackChunkName: "home-view" */'../components/TheHome.vue'),
    name: 'home'
  },
  {
    path: '/login',
    component: _ => import(/* webpackChunkName: "login-view" */'../components/TheLogin.vue')
  }
]
