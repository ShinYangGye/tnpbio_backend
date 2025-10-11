import axiosInterceptor from './axios/axiosInterceptor';

// 견적의뢰 요청
const savePrice = async (priceObj) => await axiosInterceptor.post('/price/save', priceObj);

// 이벤트 조회
const getEvents = async () => await axiosInterceptor.get(`/event/list`);

// 이벤트 단건 조회
const getEventDetail = async (id) => await axiosInterceptor.get(`/event/${id}/detail`);

// 이벤트 상위 3 조회
const getEventTop = async () => await axiosInterceptor.get(`/event/list-top`);

// 브랜드 등록 문자열 조회
const getBrandLetters = async () => await axiosInterceptor.get(`/brand/letters`);

// 브랜드 목록 조회
const getBrandList = async (brand) => await axiosInterceptor.get(`/brand/list/${brand}`);

// 상품 메뉴 조회
const getMenus = async () => await axiosInterceptor.get(`/menu/list`);

// 상품 메뉴 조회
const getMenuMain = async (mainId) => await axiosInterceptor.get(`/menu/main/${mainId}`);
const getMenuSub = async (subId) => await axiosInterceptor.get(`/menu/sub/${subId}`);

// 상품 목록 조회
const getProductList = async (subId) => await axiosInterceptor.get(`/product/list/${subId}`);

// 상품 목록 조회
const getProductTop = async () => await axiosInterceptor.get(`/product/list-top`);

// 상품 상세 조회
const getProductDetail = async (id) => await axiosInterceptor.get(`/product/detail/${id}`);

// 배너 목록 조회
const getBannerList = async () => await axiosInterceptor.get(`/banner/list`);

export {
  savePrice,
  getEvents,
  getEventDetail,
  getEventTop,
  getBrandLetters,
  getBrandList,
  getMenus,
  getMenuMain,
  getMenuSub,
  getProductList,
  getProductTop,
  getProductDetail,
  getBannerList,
};
