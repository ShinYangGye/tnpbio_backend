import { createRouter, createWebHistory } from 'vue-router';

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
          path: '/product/:subId/list',
          name: 'product-list',
          component: () => import('../views/ProductListView.vue'),
        },
        {
          path: '/product/:id/detail',
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
      path: '/price',
      name: 'price',
      component: () => import('../views/PriceView.vue'),
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/CompanyView.vue'),
    },
  ],
});

export default router;
