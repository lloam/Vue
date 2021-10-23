<template>
    <!-- 组建的结构 -->
    <div>
        <h2>学校姓名：{{name}}</h2>
        <h2>学校地址：{{age}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    // 组件交互相关的代码(数据\方法等等)
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 18
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }
</script>


