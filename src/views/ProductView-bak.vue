<script setup>
import ProductNavbar from '@/components/product/ProductNavbar.vue';
import ProductMenu from '@/components/product/ProductMenu.vue';
import ProductHome from '@/components/product/ProductHome.vue';
</script>
<template>
  <div>
    <p class="h3 d-flex"><i class="bi bi-check-square-fill"></i> &nbsp;분야별 제품정보</p>
    <hr />

    <div class="container text-center">
      <div class="row">
        <!-- 제품 왼쪽 메뉴 메뉴 -->
        <ProductMenu />
        <!-- // 제품 왼쪽 메뉴 메뉴 -->
        <div class="col-sm-12 col-md-9">
          <div>
            <!-- 제품 메뉴 네비게이선 -->
            <ProductNavbar />
            <!-- // 제품 메뉴 네비게이선 -->
            <div class="card">
              <ProductHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
