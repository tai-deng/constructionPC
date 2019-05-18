##目录结构
  public
  #src
     -- api             后台接口集，异常处理，请求响应，跨域等
     -- assets          公共资源：图片，图标，字体文件等
     -- common          公共组件
     -- components      页面页面组件
     -- routers         路由分支管理
     -- store           状态管理模块
     -- utils           工具集
     App.vue
     main.js
     router.js
     store.js



## 帐号  密码 6个8
user
xiaoli
xiaomi
xiaohua
test123
test456
test


## 一，引入reset.css重置样式
## 二，增加routers文件分路由
## 三，安装 flexible和 px2rem-loader
      sudo cnpm install lib-flexible --save
      sudo cnpm install px2rem-loader --save
      sudo cnpm install postcss-px2rem --save
      1.去掉index.html中的name 为 viewport 的 meta 标签，flexible会自动为我们添加！
      2.main.js中引入import "lib-flexible/flexible.js"
      3.创建vue.config.js并配置postcss-px2rem
## 四，引入element-ui
      sudo cnpm i element-ui -S
      sudo cnpm install babel-plugin-component -D
      1.main.js中引入：
        import {Button} from 'element-ui';
        Vue.use(Button)
        import 'element-ui/lib/theme-chalk/index.css';
## 五，引入Axios 和 qs
      sudo cnpm install axios --save
      sudo cnpm install qs --save
      1.配置Axios全局默认值
      2.配置异常处理文件Exception.js
      3.配置多种请求处理文件request.js
      4.配置接口管理文件apis.js
## 六，Vuex 和 缓存控制
      1.创建stores目录，分开处理Vuex各模块。
      2.缓存localstorge,sessionstorge操作控制，记录。配置缓存文件storge.js。
## 七，引入mock.js模拟请求
## 八，创建common目录
      1.创建minix目录
      2.创建utils目录，公共工具目录
      3.创建common-components目录管理所有公共组件
## 九，assets目录增加
      1.创建fonts目录，管理字体，SVG字体图标
      2.创建images目录，存放图片
      3.创建icons目录，存放图标。
## 十，public中增加
      1.创建mockImages目录，存放开发时模拟图片，生产环境禁止打包加入。
## 十一，开发环境和生产环境跨域配置
## 十二，配置全局公共配置文件
      1.https://blog.csdn.net/qq_39696861/article/details/81502464



增加：
1.下拉刷新
2.发布弹窗动画
3.各页面减少请求次数
4.字体统一设置（公共）
5.状态管理模块化
6.更多面向对象编程


一个私有模块
components          --子组件
assets
     fonts
     imgs
     icons
     stylus
mixins               --混入
      common.js      --公共混入
      means.js       --方法混入
      events.js      --事件混入
      watchs.js      --侦听器混入
      custom.js      --自定义
      ...
js                   --js，非混入文件
      pojo.js            --实体类文件
      api.js               --API接口
      utils.js             --工具
      states.js            --状态常量
      interfaces.js        --所有接口返回再次处理
      ...

index.js             --初始化页面文件
config.js
index.vue
    components,compusts,data()等