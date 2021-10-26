<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'School',
  data() {
    return {
      name: '南昌大学',
      address: '江西南昌',
    }
  },
  mounted() {
    // this.$bus.$on('hello', (data) => {
    //   console.log('我是School组件,收到了数据:', data)
    // })
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data)
      console.log(this)
    })
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    // 取消订阅
    pubsub.unsubscribe(this.pubId)
  },
}
</script>
<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
