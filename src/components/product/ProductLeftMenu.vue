<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useProductStore } from '../../stores/productStore';
const router = useRouter();
const productStore = useProductStore();

const route = useRoute();
const mainId = route.query.mainId;
const subId = route.query.subId;

if (mainId != undefined || mainId != null) {
  productStore.state.menuMainId = mainId;
} else {
  productStore.state.menuMainId = 0;
}

if (subId != undefined || subId != null) {
  productStore.state.menuSubId = subId;
} else {
  productStore.state.menuSubId = 0;
}

productStore.doGetMenus();

const setMenuInfo = (menu) => {
  productStore.state.menuSubDetail = {};
  productStore.state.menuMainId = menu.id;

  productStore.state.menuSubId = 0;
  router.push({ name: 'product', query: { mainId: menu.id } });
  productStore.doGetMenuInfo(menu);
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
