<script setup>
import { usePriceStore } from '../stores/priceStore';
// import { useToast } from 'vue-toastification';
// const toast = useToast();
// toast.error('테스트' + baseURL);

const price = usePriceStore();

const savePrice = () => {
  const target = document.getElementById('btn_price');
  // target.disabled = true;
  price.doSavePriceObj(target);
  // target.disabled = false;
};
</script>
<template>
  <div>
    <p class="h5 d-flex mt-2">
      <span style="padding-top: 0px; padding-right: 5px"
        ><i class="bi bi-square" style="font-size: 20px"></i></span
      >견적의뢰
    </p>
    <hr class="mb-2" />
    <p>
      <strong>
        이름, 답변 받으실 연락처를 남겨주시면 최대한 빠르게 답변드리도록 하겠습니다. <br />
        감사합니다.</strong
      >
    </p>
    <div>
      <div class="row">
        <div class="col-12 col-sm-4">
          <div class="mb-3">
            <label for="name" class="form-label">이름</label>
            <input
              type="text"
              class="form-control bg-body-secondary"
              id="name"
              placeholder=""
              maxlength="20"
              v-model="price.priceObj.name"
            />
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="mb-3">
            <label for="mobile" class="form-label">휴대폰 번호</label>
            <input
              type="text"
              class="form-control bg-body-secondary"
              id="mobile"
              placeholder=""
              maxlength="20"
              v-model="price.priceObj.mobile"
            />
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="mb-3">
            <label for="email" class="form-label">이메일</label>
            <input
              type="text"
              class="form-control bg-body-secondary"
              id="email"
              placeholder=""
              maxlength="50"
              v-model="price.priceObj.email"
            />
          </div>
        </div>
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">견적의뢰 제목</label>
        <input
          type="text"
          class="form-control bg-body-secondary"
          id="title"
          placeholder=""
          maxlength="100"
          v-model="price.priceObj.title"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">견적의뢰 내용</label>
        <textarea
          class="form-control bg-body-secondary"
          id="contents"
          placeholder=""
          rows="10"
          v-model="price.priceObj.contents"
        ></textarea>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-secondary" type="button" @click="savePrice()" id="btn_price">
          의뢰하기
        </button>
      </div>
    </div>
  </div>
</template>
