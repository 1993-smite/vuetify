import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/views/Home'
import Test from '@/components/views/Test'
import Test1 from '@/components/views/Test1'
import Holidays from '@/components/views/holidays/Holidays'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/test1', component: Test1 },
    { path: '/holidays', component: Holidays }
  ]
  
const router = new VueRouter({
    mode: 'history',
    routes 
})

export default router;