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
      component: List
    },
    {
      path: '/sigin',
      component: Sigin
    },
    {
      path: '/gift',
      component: Gift
    },
    {
      path: '/listcomponent/:type?',
      component: Listcomponent
    },
    {
      path: "/commodity/:id?/:type?",
      component: Commodity
    },
    {
      path: '/special',
      component: Special
    },
    {
      path: '/special/:id?',
      component: Specialbot
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/myuser',
      component: Myuser
    },
    {
      path: '/userZC',
      component: UserZC
    },
    {
      path: '/userDL',
      component: UserDL
    }
  ]
})
