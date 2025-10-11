<script setup>
const baseURL = import.meta.env.VITE_APP_API;
// import { useBannerStore } from '../../stores/bannerStore';
// const bannerStore = useBannerStore();
// bannerStore.doGetBannerList();

defineProps(['items']);
</script>

<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators mb-0">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        :class="{ active: index == 0 }"
        aria-current="true"
        :data-bs-slide-to="index"
        :aria-label="'Slide' + index"
        v-for="(item, index) in items"
        :key="index"
      ></button>

      <!--
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      -->
    </div>

    <div class="carousel-inner">
      <div
        class="carousel-item text-center"
        :class="{ active: index == 0 }"
        data-bs-interval="3000"
        v-for="(item, index) in items"
        :key="index"
      >
        <RouterLink
          :to="{
            name: 'product-detail',
            query: { mainId: item.menuMainId, subId: item.menuSubId, id: item.productId },
          }"
          v-if="item.type == 'product'"
        >
          <img :src="`${baseURL}/banner/image/${item.file.savedFileName}`" class="h-100"
        /></RouterLink>
        <RouterLink
          :to="{
            name: 'event-detail',
            query: { id: item.productId },
          }"
          v-if="item.type == 'event'"
        >
          <img :src="`${baseURL}/banner/image/${item.file.savedFileName}`" class="h-100"
        /></RouterLink>
      </div>

      <!--
      <div class="carousel-item text-center" data-bs-interval="3000">
        <RouterLink :to="{ name: 'product-detail', query: { id: '200' } }">
          <img
            src="https://www.bms.kr/data/banner/2023/11/20231129121428_1398276296566ac949afd3.gif"
            class="h-100"
        /></RouterLink>
      </div>
      <div class="carousel-item text-center" data-bs-interval="3000">
        <RouterLink :to="{ name: 'product-detail', query: { id: '300' } }">
          <img
            src="https://www.bms.kr/data/banner/2025/08/20250814113225_1303089239689d4ab98c687.jpg"
            class="h-100"
        /></RouterLink>
      </div>
      -->
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
      id="btnNext"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
