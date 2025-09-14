<script setup>
import CommBanner from './components/comm/CommBanner.vue';
import CommFooter from './components/comm/CommFooter.vue';
import CommHeader from './components/comm/CommHeader.vue';
</script>

<template>
  <div>
    <!-- 공통 헤더 -->
    <CommHeader />
    <!-- // 공통 헤더 -->
    <main>
      <!-- 공통 배너 -->
      <CommBanner />
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
