<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    searchUsers() {
      // 请求前更新List的数据
      this.$bus.$emit('updateListData', {
        isFirst: false,
        isLoading: true,
        errMsg: '',
        users: [],
      })
      // 除了可以使用axios发送ajax请求，也可以使用vue-resource发送
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keyword}`)
        .then(
          (response) => {
            // 请求成功后更新List的数据
            this.$bus.$emit('updateListData', {
              isLoading: false,
              errMsg: '',
              users: response.data.items,
            })
          },
          (error) => {
            // 请求失败后更新List的数据
            this.$bus.$emit('updateListData', {
              isLoading: false,
              errMsg: error.message,
              users: [],
            })
          }
        )
    },
  },
}
</script>
