<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充 -->
    <slot name="center">我是默认值，当使用者没有传递具体结构时，我会出现1</slot>
    <slot name="footer">我是默认值，当使用者没有传递具体结构时，我会出现2</slot>
    <!-- <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['listData', 'title'],
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
h4 {
  text-align: center;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>
