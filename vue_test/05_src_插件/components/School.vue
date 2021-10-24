<template>
  <div>
      <h2>学校名称：{{name | mySlice}}</h2>
      <h2>学校地址：{{sex}}</h2>
      <button @click="test">点我测试一下hello方法</button>
  </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return {
            name: '南昌大学',
            sex: '江西南昌'
        }
    },
    methods: {
        test(){
            this.hello()
        }
    },
}
</script>