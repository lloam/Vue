<template>
  <div class="container">
    <Category title="游戏">
      <template scope="lloam">
        <ul>
          <li v-for="(g, index) in lloam.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="lloam">
        <ul>
          <li style="color:red" v-for="(g, index) in lloam.games" :key="index">
            {{ g }}
          </li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="lloam">
        <h4 style="color:red" v-for="(g, index) in lloam.games" :key="index">
          {{ g }}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: { Category },
}
</script>
<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>
