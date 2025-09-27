<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '../../stores/productStore';
const router = useRouter();
const productStore = useProductStore();
productStore.doGetMenus();

const setMenuInfo = (menu) => {
  router.push({ name: 'product' });

  productStore.state.menuDetail.name = menu.menuName;
  productStore.state.menuDetail.info = menu.menuInfo;
  productStore.state.menuDetail.fileName = menu.file.savedFileName;
  productStore.state.menuDetail.menuSub = menu.menuSub;

  console.log(productStore.state.menuDetail);
};
</script>
<template>
  <div class="col-sm-12 col-md-3 bg-dark-subtle p-1 rounded-1">
    <div class="btn-group-vertical w-100 rounded-1" role="group" aria-label="Vertical button group">
      <button
        class="btn btn-secondary text-start border-light"
        type="button"
        v-for="(menu, index) in productStore.state.menus"
        :key="index"
        @click="setMenuInfo(menu)"
      >
        {{ menu.menuName }}
      </button>
    </div>
  </div>
</template>
