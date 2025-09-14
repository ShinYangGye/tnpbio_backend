<template>
  <div>
    <p class="h3 d-flex"><i class="bi bi-check-square-fill"></i> &nbsp;제품정보</p>
    <hr />

    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="i in 10" :key="i">
        <div class="card h-1em">
          <img
            src="https://www.bms.kr/data/goods/common/2023/202308000004/20230816161435_84065991164dc775b1fdc1.jpg"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
          </div>

          <RouterLink
            class="btn btn-secondary"
            :to="{ name: 'product-detail', params: { id: '100' } }"
            >Go Detail</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
