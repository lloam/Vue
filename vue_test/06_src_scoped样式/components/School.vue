<template>
  <div class="demo">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{sex}}</h2>
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
    }
}
</script>
<style scoped>
    .demo {
        background-color: skyblue;
    }
</style>