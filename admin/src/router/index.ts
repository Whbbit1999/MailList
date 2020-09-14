import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import StudentCrud from '../views/students/StudentCrud.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      {name: 'students-crud', path: '/students/list', component: StudentCrud},
     /*  {name: 'students-list', path: '/students/list', component: StudentList},
      {name: 'students-edit', path: '/students/edit/:id', component: StudentEdit, props: true},
      {name: 'students-create', path: '/students/create', component: StudentEdit},
    ] */
  ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
