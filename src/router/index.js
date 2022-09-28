import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import DashboardView from '../views/DashboardView.vue'
import VaccinesView from '../views/VaccinesView.vue'
import BarcodesView from '../views/BarcodesView.vue'
import SuppliersView from '../views/SuppliersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView,
    meta: {
      hideSidebar: true,
    }
  },
  {
    path: '/design-system',
    name: 'design',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/vaccines',
    name: 'Vaccines',
    component: VaccinesView
  },
  {
    path: '/barcodes',
    name: 'Barcodes',
    component: BarcodesView
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: SuppliersView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/:catchAll(.*)",
    name: "home",
    component: IndexView,
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
