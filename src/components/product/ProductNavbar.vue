<script setup>
import { useProductStore } from '../../stores/productStore';

const productStore = useProductStore();
</script>
<template>
  <div class="text-start">
    <b>{{ productStore.state.menuDetail.name }}</b>
  </div>
</template>
