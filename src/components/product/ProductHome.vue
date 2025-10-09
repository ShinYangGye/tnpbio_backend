<script setup></script>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '../../stores/productStore';
const baseURL = import.meta.env.VITE_APP_API;
const productStore = useProductStore();

const router = useRouter();
const route = useRoute();

const goProductList = (subId) => {
  let mainId = route.query.mainId;

  if (mainId == null || mainId == undefined) {
    mainId = productStore.state.menus[0].id;
  }

  router.push({ name: 'product-list', query: { mainId: mainId, subId: subId } });
};
</script>
<template>
  <div class="card" v-if="productStore.state.menus.length > 0">
    <div class="row g-0">
      <div class="col-md-4 p-2">
        <img
          class="img-fluid rounded-start border"
          :src="`${baseURL}/menu/image/${productStore.state.menuDetail.fileName}`"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body text-start">
          <p class="card-text wrap-text">
            {{ productStore.state.menuDetail.info }}
          </p>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <div class="p-1">
      <div class="row m-0" v-if="productStore.state.menuDetail.menuSub.length > 0">
        <div
          class="col-4 text-start d-grid p-1"
          v-for="(sub, index) in productStore.state.menuDetail.menuSub"
          :key="index"
        >
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary rounded-1 text-start"
            @click="goProductList(sub.id)"
          >
            {{ sub.menuName }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
