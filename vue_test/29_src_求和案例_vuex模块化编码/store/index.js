// 该文件用于创建 Vuex 中最为核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
import countOption from './count'
import personOption from './person'
// 使用 Vuex
Vue.use(Vuex)



// 创建并暴露 store
export default new Vuex.Store({
  modules: {
    countAbout: countOption,
    personAbout: personOption
  }
})