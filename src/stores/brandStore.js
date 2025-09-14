import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
const toast = useToast();

// import router from '../router';
import { getBrandLetters, getBrandList } from '../api/commUseApi';
export const useBrandStore = defineStore('brand', () => {
  const state = reactive({
    // 이벤트 목록
    items: [],

    letters: '',

    curLetter: 'A',
  });

  // 이벤트 목록 조회
  async function doGetBrandLetters() {
    try {
      let res = await getBrandLetters();

      console.log(res);

      if (res.status == 200) {
        state.letters = res.data;
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      console.log(error);
    }
  }

  // 이벤트 목록 조회
  async function doGetBrandList(brand) {
    try {
      state.curLetter = brand;
      let res = await getBrandList(brand);

      console.log(res);

      if (res.status == 200) {
        state.items = res.data;
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      console.log(error);
    }
  }

  return { state, doGetBrandLetters, doGetBrandList };
});
