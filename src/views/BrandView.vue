<script setup>
const upAlpa = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
const baseURL = import.meta.env.VITE_APP_API;
import { useBrandStore } from '../stores/brandStore';
const brandStore = useBrandStore();
brandStore.doGetBrandLetters();
brandStore.doGetBrandList('A');

const getBrandLisLetters = (brand) => {
  brandStore.doGetBrandList(brand);
};
</script>

<template>
  <div>
    <p class="h3 d-flex"><i class="bi bi-check-square-fill"></i> &nbsp;취급브랜드</p>
    <hr />
    <div class="text-center mb-2">
      <button
        type="button"
        class="btn rounded-0"
        v-for="letter in upAlpa"
        :key="letter"
        :class="
          brandStore.state.letters.includes(letter)
            ? brandStore.state.curLetter == letter
              ? 'btn-secondary text-bg-dark'
              : 'btn-secondary text-bg-secondary'
            : 'btn-outline-secondary '
        "
        :disabled="brandStore.state.letters.includes(letter) == false"
        @click="getBrandLisLetters(letter)"
      >
        {{ letter }}
      </button>
    </div>

    <!-- 브랜드 목록 ----------------------------------->
    <div class="card mb-1 d-none d-md-block text-bg-secondary">
      <div class="row g-0 text-center">
        <div class="col-md-10">제조사/제품 테스트 XXXXXXXXXXXXXX</div>
        <div class="col-md-2">바로가기</div>
      </div>
    </div>
    <div class="card mb-1" v-for="(item, index) in brandStore.state.items" :key="index">
      <div class="row g-0">
        <div class="col-md-2 p-1" th:if="${item.file}">
          <a th:href="${item.brandUrl}" target="_blank">
            <a :href="item.brandUrl" target="_blank">
              <img
                class="img-fluid rounded-start"
                :src="`${baseURL}/brand/image/${item.file.savedFileName}`"
            /></a>
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" th:text="${item.brandName}">{{ item.brandName }}</h5>
            <p class="card-text" th:text="${item.brandProduct}">{{ item.brandProduct }}</p>
          </div>
        </div>
        <div class="col-md-2 d-flex align-items-center">
          <div class="card-body text-center">
            <a class="btn btn-outline-secondary" :href="item.brandUrl" target="_blank">Go</a>
          </div>
        </div>
      </div>
    </div>
    <!-- // 브랜드 목록 ----------------------------------->
  </div>
</template>
