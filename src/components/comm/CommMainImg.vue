<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div class="container-fluid p-0">
    <div
      class="main_img product_img"
      v-if="
        route.name == 'product' || route.name == 'product-list' || route.name == 'product-detail'
      "
    >
      <div
        class="container text-end"
        style="
          font-size: 30px;
          font-weight: bold;
          font-style: oblique;
          padding-left: 20px;
          color: #333;
        "
      >
        PRODUCT
      </div>
    </div>

    <div class="main_img brand_img" v-else-if="route.name == 'brand'">
      <div
        class="container text-end"
        style="
          font-size: 30px;
          font-weight: bold;
          font-style: oblique;
          padding-right: 20px;
          color: #333;
        "
      >
        BRAND
      </div>
    </div>

    <div
      class="main_img event_img"
      v-else-if="route.name == 'event' || route.name == 'event-detail'"
    >
      <div
        class="container text-end"
        style="
          font-size: 30px;
          font-weight: bold;
          font-style: oblique;
          padding-right: 20px;
          color: #eee;
        "
      >
        EVENT
      </div>
    </div>

    <div class="main_img price_img" v-else-if="route.name == 'price'">
      <div
        class="container text-end"
        style="
          font-size: 30px;
          font-weight: bold;
          font-style: oblique;
          padding-left: 20px;
          color: #333;
        "
      >
        REQUEST FOR QUOTATION
      </div>
    </div>

    <div class="main_img company_img" v-else-if="route.name == 'company'">
      <div
        class="container text-end"
        style="
          font-size: 30px;
          font-weight: bold;
          font-style: oblique;
          padding-right: 20px;
          color: #333;
        "
      >
        COMPANY
      </div>
    </div>
  </div>
</template>

<style scoped>
.product_img {
  background-image: url('@/assets/images/main_product.jpg');
}

.brand_img {
  background-image: url('@/assets/images/main_brand.jpg');
}

.event_img {
  background-image: url('@/assets/images/main_event.jpg');
}

.price_img {
  background-image: url('@/assets/images/main_price.jpg');
}

.company_img {
  background-image: url('@/assets/images/main_company.jpg');
}

.main_img {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100px;
}
</style>
