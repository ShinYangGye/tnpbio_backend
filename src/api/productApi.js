import axiosInterceptor from './axios/axiosInterceptor';

// 메뉴 조회
const getMenus = async () => await axiosInterceptor.get(`/menu/list`);

export { getMenus };
