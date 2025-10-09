<script setup>
import { useProductStore } from '../../stores/productStore';
const productStore = useProductStore();
</script>
<template>
  <div class="alert alert-light text-start p-2 mb-1" role="alert">
    {{ productStore.state.navString }}
  </div>
</template>
