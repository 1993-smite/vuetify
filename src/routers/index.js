import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from '@/components/views/Test'
import Test1 from '@/components/views/Test1'

Vue.use(VueRouter);

const routes = [
    { path: '/test', component: Test },
    { path: '/test1', component: Test1 }
  ]
  
const router = new VueRouter({
    mode: 'history',
    routes 
})

export default router;