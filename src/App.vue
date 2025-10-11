<script setup>
import { useRoute } from 'vue-router';
import CommHeader from './components/comm/CommHeader.vue';
import CommBanner from './components/comm/CommBanner.vue';
import CommFooter from './components/comm/CommFooter.vue';
import CommMainImg from './components/comm/CommMainImg.vue';

import { useBannerStore } from './stores/bannerStore';
const route = useRoute();

const bannerStore = useBannerStore();
bannerStore.doGetBannerList();
</script>

<template>
  <div>
    <!-- 공통 헤더 -->
    <CommHeader />
    <!-- // 공통 헤더 -->
    <main>
      <!-- 공통 배너 -->
      <CommBanner :items="bannerStore.state.items" v-show="route.name == 'home'" />
      <!-- // 공통 배너 -->

      <!-- 메인 이미지 -->
      <CommMainImg />
      <!-- // 메인 이미지 -->
      <div class="container marketing">
        <router-view />
      </div>
    </main>

    <CommFooter />
  </div>
</template>
