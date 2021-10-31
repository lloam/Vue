// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个路由器
const router =  new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: {
        title: '主页'
      },
      children: [
        {
          name: 'xiaoxi',
          path: 'message',
          meta: {
            isAuth: true,
            title: '消息'
          },
          component: Message,
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',
              component: Detail,
              meta: {
                title: '详情'
              },
              // props的第一种写法，值为对象，该对象中的所有 key-value 都会以 props 的形式传给 Detail 组件
              // props: {a:1,b:'hello'}

              // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的params参数以props的形式传给 Detail 组件
              // props: true
              
              // props的第二种写法，值为函数
              props($route){
                return {
                  id: $route.params.id,
                  title: $route.params.title,
                  a: '666',
                  b: '你好啊！'
                }
              }
            }
          ]
        },
        {
          name: 'xinwen',
          path: 'news',
          meta: {
            isAuth: true,
            title: '新闻'
          },
          component: News,
          beforeEnter(to,from,next){
            console.log('新闻组件独享路由守卫',to,from);
            if(to.meta.isAuth){ // 判断是否需要鉴权
              if(localStorage.getItem('school') === 'NanchangUniversity'){
                next()
              }else{
                alert('学校名不对，无权限查看')
              }
            }else{
              next()
            }
          }
        }
      ]
    }
  ]
})

// 全局前置路由守卫————初始化的时候被调用、每次路由切换的时候被调用
/* router.beforeEach((to,from,next)=>{
  console.log('前置路由守卫',to,from);
  if(to.meta.isAuth){ // 判断是否需要鉴权
    if(localStorage.getItem('school') === 'NanchangUniversity'){
      next()
    }else{
      alert('学校名不对，无权限查看')
    }
  }else{
    next()
  }
}) */

// 全局前置路由守卫————初始化的时候被调用、每次路由切换的之后被调用（切换才会触发，没有切换不会触发）
router.afterEach((to,from)=>{
  console.log('后置路由守卫',to,from);
  document.title = to.meta.title || '硅谷系统'  // 修改网页的title
})

export default router
