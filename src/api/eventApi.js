import axiosInterceptor from './axios/axiosInterceptor';

// 스토리 목록 조회
// const getPosts = async (page, popular, keyword, search) => await axiosInterceptor.get(`/post/articles?page=${page}&popular=${popular}&keyword=${keyword}&search=${search}`);

const getEvents = async () => await axiosInterceptor.get(`/event/list`);

export { getEvents };
