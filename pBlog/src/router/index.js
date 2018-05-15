import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import All from '@/components/All.vue'
import Js from '@/components/Js.vue'
import Node from '@/components/Node.vue'
import Vuejs from '@/components/Vuejs.vue'
import React from '@/components/React.vue'
import CSS from '@/components/CSS.vue'
import MySQL from '@/components/MySQL.vue'
import Page from '@/components/Page.vue'
import VueMarkdown from 'vue-markdown'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {path:'/',component:All,name:'all'},
    {path:'/all',component:All,name:'all'},
    {path:'/js',component:Js,name:'js'},
    {path:'/node',component:Node,name:'node'},
    {path:'/vue',component:Vuejs,name:'vue'},
    {path:'/react',component:React,name:'react'},
    {path:'/css',component:CSS,name:'css'},
    {path:'/mysql',component:MySQL,name:'mysql'},
    {path:'/page/:id',component:Page,name:'page'},
  ]
})
