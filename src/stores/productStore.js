import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
const toast = useToast();

// import router from '../router';
import { getMenus, getProductList, getProductDetail } from '../api/commUseApi';
export const useProductStore = defineStore('product', () => {
  const state = reactive({
    // 메뉴
    menus: [],
    menuDetail: {
      name: '',
      info: '',
      fileName: '',
      menuSub: {},
    },
    products: [],
    productDetail: {},
  });

  // 메뉴 목록 조회
  async function doGetMenus() {
    try {
      let res = await getMenus();

      console.log(res.data[0]);

      if (res.status == 200) {
        state.menus = res.data;
        state.menuDetail.name = res.data[0].menuName;
        state.menuDetail.info = res.data[0].menuInfo;
        state.menuDetail.fileName = res.data[0].file.savedFileName;
        state.menuDetail.menuSub = res.data[0].menuSub;
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요.');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요.');
      console.log(error);
    }
  }

  // 상품 목록 조회
  async function doGetProducts(subId) {
    try {
      let res = await getProductList(subId);

      if (res.status == 200) {
        state.products = res.data;
        console.log(state.products);
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요1');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요2');
      console.log(error);
    }
  }

  // 상품 상세 조회
  async function doGetProductDetail(id) {
    try {
      let res = await getProductDetail(id);

      console.log(res.data[0]);

      if (res.status == 200) {
        state.productDetail = res.data;
        console.log(state.products);
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      console.log(error);
    }
  }
  return { state, doGetMenus, doGetProducts, doGetProductDetail };
});
