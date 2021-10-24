<template>
  <div class="demo">
      <h2>学生姓名：{{name}}</h2>
      <h2 class="qwe">学生性别：{{sex}}</h2>
  </div>
</template>

<script>
// import {mixin,mixin2} from '../mixin'
export default {
    name: 'Student',
    data(){
        return {
            name: '张三',
            sex: '男'
        }
    }
}
</script>
<style lang="less">
    .demo {
        background-color: orange;
        .qwe{
            font-size: 40px;
        }
    }
</style>