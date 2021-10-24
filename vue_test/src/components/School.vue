<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ sex }}</h2>
    <button @click="sendSchoolName">把学校名给 App</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '南昌大学',
      sex: '江西南昌',
    }
  },
  props: ['getSchoolName'],
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    },
  },
}
</script>
<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
