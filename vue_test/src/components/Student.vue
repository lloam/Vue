<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给 App</button>
  </div>
</template>

<script>
// import {mixin,mixin2} from '../mixin'
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },
  methods: {
    sendStudentName() {
      // 触发 Student 组件实例身上的 lloam 事件
      this.$emit('lloam', this.name, 666, 888, 999)
    },
  },
}
</script>
<style lang="less">
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>
