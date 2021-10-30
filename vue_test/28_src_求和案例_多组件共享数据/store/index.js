// 该文件用于创建 Vuex 中最为核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 使用 Vuex
Vue.use(Vuex)
// 准备 actions--用于响应组件中的动作
const actions = {
  /* jia(context,value){
    console.log('actions中的jia被调用了');
    context.commit('JIA',value)
  },
  jian(context,value){
    console.log('actions中的jian被调用了');
    context.commit('JIAN',value)
  }, */
  jiaOdd(context,value){
    console.log('actions中的jiaOdd被调用了');
    if(context.state.sum % 2) {
      context.commit('JIA',value)
    }
  },
  jiaWait(context,value){
    console.log('actions中的jiaOdd被调用了');
    setTimeout(()=>{
      context.commit('JIA',value)
    },500)
  },
}
// 准备 mutations--用于操作数据（state）
const mutations = {
  JIA(state,value){
    console.log('mutations中的JIA被调用了');
    state.sum += value
  },
  JIAN(state,value){
    console.log('mutations中的JIAN被调用了');
    state.sum -= value
  },
  ADD_PERSON(state,value){
    console.log('mutations中的ADD_PERSON被调用了');
    state.personList.unshift(value)
  }
}
// 准备 state--用于存储数据
const state = {
  sum: 0,  // 当前求和
  school: '尚硅谷',
  subject: '前端',
  personList: [
    {id: '001',name: '张三'}
  ]
}
// 准备 getters--用于对state中的数据进行加工
const getters = {
  bigSum(state){
    return state.sum*10
  }
}

// 创建并暴露 store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})