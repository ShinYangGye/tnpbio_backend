<script setup>
import { useRouter } from 'vue-router';
import ProductNavbar from '@/components/product/ProductNavbar.vue';
import { useProductStore } from '../stores/productStore';
const productStore = useProductStore();
const router = useRouter();
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
  <div>
    <div class="h3 d-flex"><i class="bi bi-check-square-fill"></i> &nbsp;분야별 제품정보</div>

    <hr />

    <div class="container text-center">
      <div class="row">
        <!-- 제품 왼쪽 메뉴 메뉴 -->
        <div class="col-sm-12 col-md-3 bg-dark-subtle p-1 rounded-1">
          <div
            class="btn-group-vertical w-100 rounded-1"
            role="group"
            aria-label="Vertical button group"
          >
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
        <!-- // 제품 왼쪽 메뉴 메뉴 -->
        <div class="col-sm-12 col-md-9">
          <div>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
