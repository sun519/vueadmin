import babelpolyfill from 'babel-polyfill'
//为什么在同一文件夹下并没有 vue.js这个文件?
//1. main.js是入口文件，所以，理论上在这里引入的文件，就是全局引入 2. 最后都打包到 bundle.js文件里面了，你可以认为，本质还是在一个地方
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes'
import Mock from './mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

// 使用模块化机制编程，導入Vue、VueRouter和Vuex
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

// 3.创建 router 实例，然后传 `routes` 配置,这里的routes是从外部导入的 import routes from './routes'
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 注册一个全局的 before 钩子（钩子可以解释为一种事件劫持机制） to即将要进入的目标路由对象  from当前导航正要离开的路由。next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数
// 钩子通俗解释：在你吃饭之前做些什么，在你吃饭之后做些什么。比如说：在你吃饭之前要拿双筷子把，吃饭之后要拿纸巾插嘴把。
router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
//如果没有获取到用户信息并且进入的目标路由对象不是登录界面的url则跳转的登录界面
  if (!user && to.path != '/login') {
    next({ path: '/login' })
    //否则 进入管道中的下一个钩子
  } else {
    next()
  }
})

//router.afterEach(transition => {
//NProgress.done();
//});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由（$mount('#app')），从而让整个应用都有路由功能
new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

