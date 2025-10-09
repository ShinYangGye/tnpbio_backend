<script setup>
import { useProductStore } from '../stores/productStore';
import { useEventStore } from '../stores/eventStore';
const baseURL = import.meta.env.VITE_APP_API;
const productStore = useProductStore();
const eventStore = useEventStore();

productStore.doGetProdutTop();
eventStore.doGetEventTop();
</script>

<template>
  <div>
    <div>
      <p class="h5 d-flex mt-2">
        <span style="padding-top: 0px; padding-right: 5px"
          ><i class="bi bi-square" style="font-size: 20px"></i></span
        >분야별 제품정보
      </p>
      <hr class="mb-2" />

      <div class="row row-cols-1 row-cols-md-4 g-2">
        <div class="col" v-for="(prd, index) in productStore.state.products" :key="index">
          <div class="card h-100">
            <div v-for="(file, i) in prd.files" :key="i">
              <div v-if="file.kind == 'main'">
                <img class="card-img-top" :src="`${baseURL}/product/image/${file.savedFileName}`" />
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title text-truncate">{{ prd.productName }}</h5>
              <p class="card-text text-truncate">
                {{ prd.productBrand }}
              </p>
            </div>

            <RouterLink
              class="btn btn-secondary"
              :to="{
                name: 'product-detail',
                query: { mainId: prd.menuMainId, subId: prd.menuSubId, id: prd.id },
              }"
              >Go Detail</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <p class="h5 d-flex mt-2">
        <span style="padding-top: 0px; padding-right: 5px"
          ><i class="bi bi-square" style="font-size: 20px"></i></span
        >이벤트
      </p>
      <hr class="mb-2" />
      <div class="text-center h4" v-if="eventStore.state.items.length == 0">
        진행중인 이벤트가 없습니다.
      </div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item" v-for="(item, index) in eventStore.state.items" :key="index">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#flush-collapseOne-${index}`"
              aria-expanded="false"
              :aria-controls="`flush-collapseOne-${index}`"
              style="border-bottom: 1px solid gray"
            >
              {{ item.title }}
            </button>
          </h2>
          <div
            :id="`flush-collapseOne-${index}`"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body wrap-text">
              {{ item.contents }}
            </div>
            <div class="accordion-body" v-if="item.file">
              <a :href="`${baseURL}/event/attach/${item.id}`"
                >{{ item.file.orgFileName }}
                <span class="badge text-bg-secondary">이벤트 파일 다운로드</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
