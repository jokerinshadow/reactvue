

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


import commons from './commons'

//创建好的store
const store = new Vuex.Store({
    modules: {//划分模块
        commons//通用模块，例如里面会保存一些用户信息这样的在绝大部分组件都会用到的数据
    }
})

export default store