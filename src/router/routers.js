import Main from '@/view/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [{
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () =>
      import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        hideInMenu: true,
        title: '首页',
        notCache: true
      },
      component: () =>
        import('@/view/single-page/home')
    }]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '医生列表'
    },
    component: Main,
    children: [{
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'ios-contact',
          title: '医生列表'
        },
        component: () =>
          import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          icon: 'md-person-add',
          title: '添加医生'
        },
        component: () =>
          import('@/view/components/drag-list/drag-list.vue')
      }
    ]
  },
  {
    path: '/tools_methods',
    name: 'tools_methods',
    meta: {
      hide: true
    },
    component: Main,
    children: [{
      path: 'tools_methods_page',
      name: 'tools_methods_page',
      meta: {
        icon: 'ios-hammer',
        title: '用户列表'
      },
      component: () =>
        import('@/view/tools-methods/tools-methods.vue')
    }]
  },
  {
    path: '/directive',
    name: 'directive',
    meta: {
      icon: 'ios-apps',
      title: '就医指南',
      hide: true
    },
    component: Main,
    children: [{
        path: 'directive_page',
        name: 'directive_page',
        meta: {
          icon: 'ios-navigate',
          title: '文章详情'
        },
        component: () =>
          import('@/view/directive/directive.vue')
      },
      {
        path: '/page_list_page',
        name: 'page_list_page',
        meta: {
          icon: 'md-add',
          title: '添加文章'
        },
        component: () =>
          import('@/view/directive/page-list.vue')
      }
      
    ]
  },

  {
    path: '/illclass',
    name: 'illclass',
    meta: {
      icon: 'md-cloud-upload',
      title: '病种分类'
    },
    component: Main,
    children: [
      {
        path: 'illclass_details_page',
        name: 'illclass_details_page',
        meta: {
          icon: 'ios-document',
          title: '病种分类'
        },
        component: () => import('@/view/illclass/illclass-details.vue')
      },
      {
        path: 'illclass_add_page',
        name: 'illclass_add_page',
        meta: {
          icon: 'md-clipboard',
          title: '添加病种'
        },
        component: () => import('@/view/illclass/illclass-add.vue')
      },
    ]
  },
  {
    path: '/list',
    name: 'list',
    meta:{
      hide:true
    },
    component: Main,
    children: [
      {
        path: 'list_page',
        name: 'list_page',
        meta: {
          icon: 'md-albums',
          title: '挂号列表'
        },
        component: () => import('@/view/registration/registration-list.vue')
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [{
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: '动态路由',
          notCache: true
        },
        component: () =>
          import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: '带参路由',
          notCache: true
        },
        component: () =>
          import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () =>
      import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () =>
      import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () =>
      import('@/view/error-page/404.vue')
  }
]
