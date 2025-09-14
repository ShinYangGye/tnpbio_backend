<template>
  <div>
    <div>
      <p class="h3 d-flex"><i class="bi bi-check-square-fill"></i> &nbsp;제품정보</p>
      <hr />

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="i in 4" :key="i">
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
    <hr />
    <div>
      <p class="h3 d-flex"><i class="bi bi-check-square-fill"></i> &nbsp;이벤트</p>
      <hr />
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              이벤트 #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the first item’s accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              이벤트 #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s
              imagine this being filled with some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              이벤트 #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing
              more exciting happening here in terms of content, but just filling up the space to
              make it look, at least at first glance, a bit more representative of how this would
              look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
