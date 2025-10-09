<script setup>
import ProductNavbar from '@/components/product/ProductNavbar.vue';
import ProductLeftMenu from '@/components/product/ProductLeftMenu.vue';
// import { useProductStore } from '../stores/productStore';
// const productStore = useProductStore();
// productStore.doGetMenus();
</script>
<template>
  <div>
    <p class="h5 d-flex mt-2">
      <span style="padding-top: 0px; padding-right: 5px"
        ><i class="bi bi-square" style="font-size: 20px"></i></span
      >분야별 제품정보
    </p>
    <hr class="mb-2" />

    <div class="container text-center">
      <div class="row">
        <ProductLeftMenu />
        <div class="col-sm-12 col-md-9">
          <div>
            <ProductNavbar />
          </div>
          <div>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
