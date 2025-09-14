import axiosBase from "./axios/axiosBase"
import axiosInterceptor from './axios/axiosInterceptor';

// 괸심질병 키워드 조회
const getConcernKeywords = async () => await axiosInterceptor.get(`/comm/concern-keywords`);

// 관련 검색어 조회
const getSearchKeywords = async (keyword) => await axiosBase.get(`/comm/rel-keywords?keyword=${keyword}`);

// 배너조회
const getBanners = async () => await axiosInterceptor.get(`/comm/banners`);

export {

	getConcernKeywords,
	getSearchKeywords,
	getBanners,
	
}