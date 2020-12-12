import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    redirect: '/menu/fake'
  },
  {
    path: '/menu/:restaurant_id',
    name: 'Menu',
    component: () => import('../views/Menu/index.vue'),
    children: [
      {
        path: 'meals/:category_id',
        name: 'Meals',
        component: () => import('../views/Menu/Meals/index.vue')
      }
    ]
  },
  {
    path: '/restaurantList',
    name: 'RestaurantList',
    component: () => import('../views/RestaurantList/index.vue')
  },
  {
    path: '/backstage',
    name: 'Backstage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Backstage.vue'),
    children: [
      {
        path: 'rest-list',
        name: 'rest-list',
        component: () => import('../views/backstage/Rest-list.vue')
      },
      {
        path: 'rest-create',
        name: 'rest-create',
        component: () => import('../views/backstage/Rest-create.vue')
      },
      {
        path: 'meal-create',
        name: 'meal-create',
        component: () => import('../views/backstage/Meal-create.vue')
      },
      {
        path: 'menuCategory-create',
        name: 'menuCategory-create',
        component: () => import('../views/backstage/MenuCategory-create.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
