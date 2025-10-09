<script setup></script>
<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../../stores/productStore';
const baseURL = import.meta.env.VITE_APP_API;
const route = useRoute();
const id = route.query.id;

const productStore = useProductStore();
productStore.doGetProductDetail(id);
</script>
<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <!-- 상품 이미지 ---------->
      <div class="carousel slide bg-transparent" id="carouselDemo">
        <div class="carousel-inner">
          <div
            class="carousel-item border border-secondary-subtle"
            :class="{ active: file.kind == 'main' }"
            v-for="(file, index) in productStore.state.productDetail.files"
            :key="index"
          >
            <img
              :src="`${baseURL}/product/image/${file.savedFileName}`"
              class="w-100 h-100"
              v-if="file.kind == 'main' || file.kind == 'sub'"
            />
          </div>
        </div>

        <div class="carousel-indicators mb-5">
          <div v-for="(file, index) in productStore.state.productDetail.files" :key="index">
            <button
              type="button"
              :class="{ active: file.kind == 'main' }"
              data-bs-target="#carouselDemo"
              :data-bs-slide-to="index"
              v-if="file.kind == 'main' || file.kind == 'sub'"
            >
              <img :src="`${baseURL}/product/image/${file.savedFileName}`" />
            </button>
          </div>
        </div>
      </div>
      <!-- // 상품 이미지 ---------->
    </div>
    <div class="col">
      <div>
        <ol class="list-group">
          <li class="list-group-item d-flex text-start">
            <div class="">
              <div class="fw-bold">제품명</div>
              {{ productStore.state.productDetail.productName }}
            </div>
          </li>
          <li class="list-group-item d-flex text-start">
            <div class="">
              <div class="fw-bold">제품용도</div>
              {{ productStore.state.productDetail.productUse }}
            </div>
          </li>
          <li class="list-group-item d-flex text-start">
            <div class="">
              <div class="fw-bold">브랜드</div>
              {{ productStore.state.productDetail.productBrand }}
            </div>
          </li>
          <li class="list-group-item d-flex text-start">
            <div class="">
              <div class="fw-bold">개요</div>
              <div class="wrap-text">{{ productStore.state.productDetail.productContents }}</div>
            </div>
          </li>
          <li class="list-group-item d-flex text-start">
            <div>
              <div class="fw-bold">제품자료</div>

              <ol v-for="(file, index) in productStore.state.productDetail.files" :key="index">
                <li v-if="file.kind == 'doc'">
                  {{ file.orgFileName }}
                  <a :href="`${baseURL}/product/attach/${file.id}`">
                    <span class="badge text-bg-secondary">다운로드</span>
                  </a>
                </li>
              </ol>
            </div>
          </li>
          <li class="list-group-item text-end">
            <router-link
              type="button"
              class="btn btn-sm btn-secondary bg-danger"
              :to="{ name: 'price' }"
              >견적의뢰</router-link
            >
          </li>
        </ol>
      </div>
    </div>

    <div class="container-fluid w-100 mt-4">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            제품특징
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            제품사양
          </button>
        </div>
      </nav>
      <div class="tab-content mt-1" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <div v-for="(file, index) in productStore.state.productDetail.files" :key="index">
            <div v-if="file.kind == 'use'">
              <img
                class="img-fluid rounded-start"
                :src="`${baseURL}/product/image/${file.savedFileName}`"
              />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <div v-for="(file, index) in productStore.state.productDetail.files" :key="index">
            <div v-if="file.kind == 'spec'">
              <img
                class="img-fluid rounded-start"
                :src="`${baseURL}/product/image/${file.savedFileName}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-indicators img {
  width: 70px;
  height: 70px;
  display: block;
}
.carousel-indicators button {
  width: max-content !important;
}
.carousel-indicators {
  position: unset;
}

.carousel-indicators img {
  border: 2px solid #ccc;
}
.carousel-indicators button.active img {
  border: 2px solid #999;
}

.nav-link.active {
  background-color: #ccc;
}
</style>
