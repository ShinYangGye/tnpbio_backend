import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
//import router from '../router';
import {
  getMenus,
  // getMenuMain,
  // getMenuSub,
  getProductList,
  getProductDetail,
  getProductTop,
} from '../api/commUseApi';

const toast = useToast();

export const useProductStore = defineStore('product', () => {
  const state = reactive({
    // 메뉴
    menus: [],
    menuMainId: 0,
    menuSubId: 0,
    menuDetail: {
      name: '',
      info: '',
      fileName: '',
      menuSub: {},
    },
    menuSubDetail: {},
    products: [],
    productDetail: {},
    navString: '제품정보',
  });

  // 메뉴 목록 조회
  async function doGetMenus() {
    try {
      let res = await getMenus();

      if (res.status == 200) {
        state.menus = res.data;

        if (state.menus.length == 0) {
          return;
        }

        const menuInfo = res.data.find((item) => item.id == state.menuMainId);
        // console.log('menuInfo------------------', menuInfo);

        if (menuInfo == undefined || menuInfo == null) {
          state.menuDetail.name = res.data[0].menuName;
          state.menuDetail.info = res.data[0].menuInfo;
          state.menuDetail.fileName = res.data[0].file.savedFileName;
          state.menuDetail.menuSub = res.data[0].menuSub;
        } else {
          state.menuDetail.name = menuInfo.menuName;
          state.menuDetail.info = menuInfo.menuInfo;
          state.menuDetail.fileName = menuInfo.file.savedFileName;
          state.menuDetail.menuSub = menuInfo.menuSub;
          state.menuSubDetail = menuInfo.menuSub.find((item) => item.id == state.menuSubId);
        }

        state.navString = state.menuDetail.name;
      } else {
        toast.info('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요.');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요.');
      console.log(error);
    }
  }

  // 메뉴 정보 세팅
  async function doGetMenuInfo(menu) {
    try {
      state.menuDetail.name = menu.menuName;
      state.menuDetail.info = menu.menuInfo;
      state.menuDetail.fileName = menu.file.savedFileName;
      state.menuDetail.menuSub = menu.menuSub;

      state.menuMainId = menu.id;
      state.navString = state.menuDetail.name;
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요.');
      console.log(error);
    }
  }

  // 상품 목록 조회
  async function doGetProducts(subId) {
    try {
      // doGetMenus();
      // 메뉴 네비 세팅
      let mainMenuName = '';
      let subMenuName = '';
      let resMenu = await getMenus();

      const menuInfo = resMenu.data.find((item) => item.id == state.menuMainId);
      mainMenuName = menuInfo.menuName;
      state.menuSubDetail = menuInfo.menuSub.find((item) => item.id == state.menuSubId);
      subMenuName = state.menuSubDetail.menuName;
      console.log('--------------', menuInfo);
      state.navString = mainMenuName + ' ▶ ' + subMenuName;
      // 메뉴 네비 세팅

      let res = await getProductList(subId);

      if (res.status == 200) {
        state.products = res.data;
        // state.menuSubDetail = state.menuDetail.menuSub.find((item) => item.id == subId);
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요1');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요2');
      console.log(error);
    }
  }

  // 상품 상위 4개 조회
  async function doGetProdutTop() {
    try {
      let res = await getProductTop();

      if (res.status == 200) {
        state.products = res.data;
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
      // 메뉴 네비 세팅
      let mainMenuName = '';
      let subMenuName = '';
      let resMenu = await getMenus();

      const menuInfo = resMenu.data.find((item) => item.id == state.menuMainId);
      mainMenuName = menuInfo.menuName;
      state.menuSubDetail = menuInfo.menuSub.find((item) => item.id == state.menuSubId);
      subMenuName = state.menuSubDetail.menuName;
      state.navString = mainMenuName + ' ▶ ' + subMenuName;
      // 메뉴 네비 세팅

      let res = await getProductDetail(id);

      if (res.status == 200) {
        state.productDetail = res.data;
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      console.log(error);
    }
  }

  return { state, doGetMenus, doGetMenuInfo, doGetProducts, doGetProductDetail, doGetProdutTop };
});
