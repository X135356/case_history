import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import UserEditor from '../views/UserEditor'
import Record from '../views/Record'
import Record2 from '../views/Record2'
import RecordEditor from '../views/RecordEditor'
import Hot1 from '../views/Hot1'
import Hot1_2 from '../views/Hot1_2'
import Hot1_3 from '../views/Hot1_3'

Vue.use(VueRouter);

const routes = [
    {path: '/',name: 'home',component:Home},
    {path: '/user',name: 'user',component:User},
    {path: '/user_editor',name: 'user_editor',component:UserEditor},
    {path: '/record',name: 'record',component:Record},
    {path: '/record2',name: 'record2',component:Record2},
    {path: '/record_editor',name: 'record_editor',component:RecordEditor},
    {path: '/hot1',name: 'hot1',component:Hot1},
    {path: '/hot1_2',name: 'hot1_2',component:Hot1_2},
    {path: '/hot1_3',name: 'hot1_3',component:Hot1_3},
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
    }*/
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
