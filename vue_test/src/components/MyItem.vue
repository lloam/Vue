<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handlerCheck(todo.id)"
      />
      <!-- 以下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了 props -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handlerDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo', 'checkTodo', 'deleteTodo'],
  methods: {
    handlerCheck(id) {
      // 通知 App 组件将对应的 todo 对象
      this.checkTodo(id)
    },
    handlerDelete(id) {
      if (confirm('确定删除吗？')) {
        // 通知 App 组件删除对应的 todo 对象
        this.deleteTodo(id)
      }
    },
  },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
