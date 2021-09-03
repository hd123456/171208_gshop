/*路由器对象模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
    //所有路由
    routes:[
        {
            path:'/msite',
            component:MSite,
            meta:{
                showFooter:true,
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true,
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true,
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true,//meta这个值默认就有,只不过是一个空对象,空对象去取这个属性值得到的是false
            }
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:Login,
        }
    ]
})