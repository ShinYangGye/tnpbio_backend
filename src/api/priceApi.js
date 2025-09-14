import axiosInterceptor from './axios/axiosInterceptor';

// 견적의뢰 요청
const savePrice = async (priceObj) => await axiosInterceptor.post('/price/save', priceObj);

export { savePrice };
