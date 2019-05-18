import Vue from 'vue'
import Router from 'vue-router'
const login =()=> import('@/components/login/login')
const project = () => import ('@/components/configuration/project/project')
const watchModel = () =>
    import ('@/components/virtualConstruction/uploadModel/components/watchModel')
// const model = ()=> import('@/components/model/model')

import navigatorBarRouter from './routers/navigatorBar_router.js'
// import indexRouter from './routers/index_router.js'
// import loginRouter from './routers/login_router.js'
// import deviceRouter from './routers/device_router.js'
// import issueRouter from './routers/issue_router.js'
// import userRouter from './routers/user_router.js'
// import maintenanceRouter from './routers/maintenance_router.js'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/login',name:'登录',component:login},
    {path:'/project',name:'项目开通',component:project},
    // {path:'/model',name:'模型',component:model},
    ...navigatorBarRouter,
    {path: '/nav/:id/components/watchModel',name:'登录',component:watchModel}
    // ...indexRouter,
    // ...loginRouter,
    // ...deviceRouter,
    // ...issueRouter,
    // ...userRouter,
    // ...maintenanceRouter
  ]
})