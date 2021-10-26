<template>
  <transition name="todo" appear>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handlerCheck(todo.id)"
        />
        <!-- 以下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了 props -->
        <!-- <input type="checkbox" v-model="todo.done" /> -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handlerBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handlerDelete(todo.id)">
        删除
      </button>
      <button
        class="btn btn-edit"
        v-show="!todo.isEdit"
        @click="handlerEdit(todo)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'MyItem',
  props: ['todo'],
  methods: {
    // 勾选或取消勾选
    handlerCheck(id) {
      // 通知 App 组件将对应的 todo 对象
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    // 删除
    handlerDelete(id) {
      if (confirm('确定删除吗？')) {
        // 通知 App 组件删除对应的 todo 对象
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id)
        // 发送数据的一方发布消息
        pubsub.publish('deleteTodo', id)
      }
    },
    // 编辑
    handlerEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function() {
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦点回调（真正执行修改逻辑）
    handlerBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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

.todo-enter-active {
  animation: lloam 1s linear;
}

.todo-leave-active {
  animation: lloam 1s linear reverse;
}

@keyframes lloam {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
