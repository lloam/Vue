/* 
  该文件是整个项目地入口文件
*/
// 引入 Vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'
// 关闭 vue 的生产提示
Vue.config.productionTip = false

/* 
  关于不同版本的vue
  1. vue.js与vue.runtime.xxx.js的区别：
   (1). vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
   (2). vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
  2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，
    需要使用render函数接收到的createElement函数去指定具体内容。
*/

let person = {name:'tom',age:18}

// 创建 Vue 实例对象 --- vm
new Vue({
  // 将 App 组件放入容器中
  render: h => h(App),
  // render:q=>q('h1','你好啊')
  // template: `<h2>你好啊</h2>`,
  // components:{App}
}).$mount('#app')
