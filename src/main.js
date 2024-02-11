import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

// Firebase
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyASMMi_5VuT_hWk-iOlcKnCHQYxcHoQUec",
  authDomain: "vue-app-7149a.firebaseapp.com",
  projectId: "vue-app-7149a",
  storageBucket: "vue-app-7149a.appspot.com",
  messagingSenderId: "677109324093",
  appId: "1:677109324093:web:77ae6cb38c142357838d54",
  measurementId: "G-23ZN1SPZE4"
};

// Initialize Firebase
initializeApp(firebaseConfig);


createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  }, {
    path: '/products',
    component: ProductsPage,
  }, {
    path: '/products/:productId',
    component: ProductDetailPage,
  }, {
    path: '/',
    redirect: '/products',
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
