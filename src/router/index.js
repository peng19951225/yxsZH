import Vue from 'vue'
import Router from 'vue-router'
// 首页、分类、购物车、用户
import List from '../views/list.vue'
import Classify from '../views/classify.vue'
import Cart from '../views/cart.vue'
import Myuser from '../views/myuser.vue'



//商品列表、商品详情
import Listcomponent from '@/components/listcomponent.vue'
import Commodity from '../components/commodity.vue'
// 领劵、积分
import Sigin from '../components/sigin.vue'
import Gift from '../components/gift.vue'

//专栏
import Special from '../views/special.vue'
import Specialbot from '../components/special-bot.vue'


// 注册登录
import UserZC from '../views/userZC.vue'
import UserDL from '../views/userDL.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: List,
      meta: {
        index: 0
      }
    },
    {
      path: '/sigin',
      component: Sigin,
      meta: {
        index: 1
      }
    },
    {
      path: '/gift',
      component: Gift,
      meta: {
        index: 2
      }
    },
    {
      path: '/listcomponent/:type?',
      component: Listcomponent,
      meta: {
        index: 3
      }
    },
    {
      path: "/commodity/:id?/:type?",
      component: Commodity,
      meta: {
        index: 4
      }
    },
    {
      path: '/special',
      component: Special,
      meta: {
        index: 5
      }
    },
    {
      path: '/special/:id?',
      component: Specialbot,
      meta: {
        index: 6
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        index: 7
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        index: 8
      }
    },
    {
      path: '/myuser',
      component: Myuser,
      meta: {
        index: 9
      }
    },
    {
      path: '/userZC',
      component: UserZC,
      meta: {
        index: 10
      }
    },
    {
      path: '/userDL',
      component: UserDL,
      meta: {
        index: 11
      }
    }
  ]
})
