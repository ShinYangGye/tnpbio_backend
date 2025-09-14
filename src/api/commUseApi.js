import axiosInterceptor from './axios/axiosInterceptor';

// 견적의뢰 요청
const savePrice = async (priceObj) => await axiosInterceptor.post('/price/save', priceObj);

// 이벤트 조회
const getEvents = async () => await axiosInterceptor.get(`/event/list`);

// 브랜드 등록 문자열 조회
const getBrandLetters = async () => await axiosInterceptor.get(`/brand/letters`);

// 브랜드 목록 조회
const getBrandList = async (brand) => await axiosInterceptor.get(`/brand/list/${brand}`);

export { savePrice, getEvents, getBrandLetters, getBrandList };
