import { createRouter, createWebHistory } from 'vue-router';
//import HomeView from '../views/HomeView.vue';

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/product',
      name: '',
      component: () => import('../views/ProductLayoutView.vue'),
      children: [
        {
          path: '',
          name: 'product',
          component: () => import('../views/ProductHomeView.vue'),
        },
        {
          path: '/product/list',
          name: 'product-list',
          component: () => import('../views/ProductListView.vue'),
        },
        {
          path: '/product/detail',
          name: 'product-detail',
          component: () => import('../views/ProductDetailView.vue'),
        },
      ],
    },
    /*
    {
      path: '/product/:subId/list',
      name: 'product-list',
      component: () => import('../views/ProductListView.vue'),
    },
       */

    {
      path: '/brand',
      name: 'brand',
      component: () => import('../views/BrandView.vue'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue'),
    },
    {
      path: '/event/detail',
      name: 'event-detail',
      component: () => import('../views/EventDetailView.vue'),
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('../views/PriceView.vue'),
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/CompanyView.vue'),
    },
    /*
    {
      path: '/:pathMatch(.*)*',
      name: 'blank',
      component: () => import('../views/BlankView.vue'),
    },
    */
  ],
});

export default router;
