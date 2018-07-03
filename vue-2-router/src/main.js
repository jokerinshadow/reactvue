// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//mint-ui相关
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//css reset
import './stylesheets/reset.scss'

// swiper
import 'swiper/dist/css/swiper.min.css'

// store
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//为了让里面所有的组件都可以通过this.$router/this.$route来使用router/route的api
  store,//为了让里面所有的组件都可以通过this.$store来使用store的api
  components: { App },
  template: '<App/>'
})
