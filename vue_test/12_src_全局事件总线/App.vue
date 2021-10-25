<template>
  <div class="app">
    <School />
    <Student />
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
      studentName: '',
    }
  },
}
</script>
<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
