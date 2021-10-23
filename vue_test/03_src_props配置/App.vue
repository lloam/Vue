<template>
    <div>
        <School name="李四" sex="女" :age="18"/>
    </div>
</template>

<script>
    // 引入 School 组件
    import School from './components/Student.vue'
    export default {
        name: 'App',
        components: {
            School
        }
    }
</script>
