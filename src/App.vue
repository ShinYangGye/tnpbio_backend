<script setup>
import { useRoute } from 'vue-router';
import CommHeader from './components/comm/CommHeader.vue';
import CommBanner from './components/comm/CommBanner.vue';
import CommFooter from './components/comm/CommFooter.vue';
const route = useRoute();
</script>

<template>
  <div>
    <!-- 공통 헤더 -->
    <CommHeader />
    <!-- // 공통 헤더 -->
    <main>
      <!-- 공통 배너 -->
      <CommBanner v-show="route.name == 'home'" />
      <!-- // 공통 배너 -->

      <div class="container marketing">
        <router-view />
      </div>

      <!-- FOOTER -->
      <CommFooter />
      <!-- // FOOTER -->
    </main>
  </div>
</template>
