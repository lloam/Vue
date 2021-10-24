<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法：使用@或v-on） -->
    <Student @lloam="getStudentName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法：使用ref） -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
// 引入 School 组件
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
  name: 'App',
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: '你好啊！',
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App 收到了学校名：', name)
    },
    getStudentName(name, ...params) {
      console.log('App 收到了学生名：', name, params)
    },
  },
  mounted() {
    // this.$refs.student.$on('lloam', this.getStudentName)   // 绑定自定义事件
    // this.$refs.student.$once('lloam', this.getStudentName) // 绑定自定义事件（一次性）
  },
}
</script>
<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
