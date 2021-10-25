<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给 App</button>
    <button @click="unbind">解绑lloam事件</button>
    <button @click="death">销毁当前Student组件的实例对象</button>
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
      number: 0,
    }
  },
  methods: {
    add() {
      console.log('add回调被调用了')
      this.number++
    },
    sendStudentName() {
      // 触发 Student 组件实例身上的 lloam 事件
      this.$emit('lloam', this.name, 666, 888, 999)
      // this.$emit('demo')
    },
    unbind() {
      this.$off('lloam') // 解绑一个自定义事件
      // this.$off(['lloam', 'demo'])  // 解绑一个自定义事件
      // this.$off() // 解绑所有自定义事件
    },
    death() {
      this.$destroy() // 销毁了当前Student组件的实例，销毁后所有Student组件的自定义事件全都不奏效
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
