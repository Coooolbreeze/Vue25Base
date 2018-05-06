export default [
  {
    path: '/',
    redirect: '/blog'
  },
  {
    path: '/blog',
    component: _ => import(/* webpackChunkName: "blog-view" */'../components/TheBlog.vue'),
    children: [
      {
        path: '',
        component: _ => import(/* webpackChunkName: "blog-list-view" */'../components/BlogList.vue'),
        name: 'blog-list'
      },
      {
        path: ':id',
        component: _ => import(/* webpackChunkName: "blog-detail-view" */'../components/BlogDetail.vue'),
        name: 'blog-detail'
      }
    ]
  },
  {
    path: '/login',
    component: _ => import(/* webpackChunkName: "login-view" */'../components/TheLogin.vue')
  }
]
