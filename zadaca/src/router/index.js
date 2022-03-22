import Vue from 'vue'
import VueRouter from 'vue-router'
import Commits from "../views/Commits.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Commits
  },
  {
    path: "/commits",
    name: "commits",
    component: Commits
  },
  {
    path: "/details",
    name: "details",
    component: () => import("../views/Details.vue"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
