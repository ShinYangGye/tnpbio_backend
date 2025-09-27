<script setup></script>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '../../stores/productStore';
const baseURL = import.meta.env.VITE_APP_API;
const productStore = useProductStore();

const router = useRouter();
const route = useRoute();

console.log(route.params.subId);
productStore.doGetProducts(route.params.subId);

const goDetail = (id) => {
  router.push({ name: 'product-detail', params: { id } });
};
</script>
<template>
  <div class="row row-cols-1 row-cols-md-4 g-2">
    <div class="col" v-for="(prd, index) in productStore.state.products" :key="index">
      <div class="card h-100">
        <div v-for="(file, i) in prd.files" :key="i">
          <div v-if="file.kind == 'main'">
            <img class="card-img-top" :src="`${baseURL}/product/image/${file.savedFileName}`" />
          </div>
        </div>

        <div class="card-body text-start">
          <h5 class="card-title">{{ prd.productName }}</h5>
          <p class="card-text">{{ prd.productBrand }}</p>
        </div>
        <div class="card-footer text-end p-1">
          <small class="text-body-secondary"
            ><button type="button" class="btn btn-sm btn-secondary" @click="goDetail(prd.id)">
              상세보기
            </button></small
          >
        </div>
      </div>
    </div>
  </div>
</template>
