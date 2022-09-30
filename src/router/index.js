import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import DashboardView from '../views/DashboardView.vue'
import VaccinesView from '../views/VaccinesView.vue'
import BarcodesView from '../views/BarcodesView.vue'
import SuppliersView from '../views/SuppliersView.vue'
import Register from '../views/Register.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      requiresAuth: false,
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
    component: DashboardView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/vaccines',
    name: 'Vaccines',
    component: VaccinesView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/barcodes',
    name: 'Barcodes',
    component: BarcodesView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: SuppliersView,
    meta: {
      requiresAuth: true,
    }
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
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(), (user) => {
      removeListener();
      resolve(user);
    }, reject)
  });
}
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("No Access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router
