import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './assets/stylus/index.styl'
import * as Util from '@/utils/util.js'

/** 加入Axios请求 qs处理GET参数 配置axios全局默认值*/
import qs from 'qs'
import Axios from 'axios'
Vue.use(ElementUI);
Vue.use(ElementUI);

// 模似数据
import mockData from 'mockjs'
Vue.prototype.$mock = mockData
// 生产环境跨域
if (process.env.NODE_ENV == 'development') {
  console.log('开发环境')
} else {
  Axios.defaults.baseURL = 'http://47.112.21.206:8006'//数据化服务器
}
// 点击自动复制
import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard;
import Request from './common/mixins/Exception.js' // axios请求封装（异常处理）
import loading from './common/mixins/loading.js'// 全局加载中
import apiResponse from './common/mixins/apiResponse.js' // 高阶请求封装
Vue.mixin(Request).mixin(loading).mixin(apiResponse)
import {
  Message,Container,Header,Aside,Main,Input,InputNumber,
  Select,Option,
  Table,
  TableColumn,
  Button,
  Form,
  FormItem,
  Loading, Row, Col, DatePicker,
  Autocomplete,
  Upload,
  Tree,
  Pagination,
  Badge,
  MessageBox
} from 'element-ui';
import {Tabbar,Dialog,Toast} from 'vant';

Vue.use(Tabbar).use(Container).use(Header).use(Aside).use(Main).use(Select).use(Option).use(Input)
  .use(Table).use(TableColumn).use(Button).use(Form).use(FormItem).use(Row).use(Loading).use(InputNumber).use(Message).use(Row).use(Col).use(DatePicker)
  .use(Autocomplete).use(Upload).use(Tree).use(Pagination).use(Badge)
Vue.prototype.$message = Message
Vue.prototype.$Swiper = Swiper
Vue.prototype.$dialog = Dialog
Vue.prototype.$util = Util
Vue.prototype.$toast = Toast
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
import 'element-ui/lib/theme-chalk/index.css'
import "lib-flexible/flexible.js"
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import echarts from 'echarts/dist/echarts.min.js'
import 'vue-orgchart/dist/style.min.css'

import VueClipboard from 'vue-clipboard2' //vue点击复制粘贴功能（上传模型--分享模态框）
Vue.use(VueClipboard)
Vue.component(CollapseTransition.name, CollapseTransition)




Axios.defaults.timeout = 1000000
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$echarts = echarts
Vue.prototype.$http = Axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//全局混入