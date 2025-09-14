import axiosInterceptor from './axios/axiosInterceptor';

// 회원가입
const accountJoin = async (joinObj) => await axiosInterceptor.post('/account/join', joinObj);

// 로그인
const accountLogin = async (loginObj) => await axiosInterceptor.post('/account/login', loginObj);

// 로그인 프로필 조회
const getAccountProfile = async () => await axiosInterceptor.get('/account/profile');

// 토큰갱신
const getAccountRefreshToken = async (refreshObj) => await axiosInterceptor.post('/account/refresh-token', refreshObj);

// 구독하기
const saveFollow = async (userId) => await axiosInterceptor.post(`/account/follow/${userId}`);

// 구독취소
const deleteFollow = async (userId) => await axiosInterceptor.delete(`/account/follow/${userId}`);

// 구독자, 구둑중, 내답글 갯수 조회
const getAccountCounts = async () => await axiosInterceptor.get('/account/counts');

// 내글 목록 조회
const getAccountArticles = async () => await axiosInterceptor.get('/account/articles');

// 북마크 목록 조회
const getAccountBookmarks = async () => await axiosInterceptor.get('/account/bookmark/articles');

// 내가 구독한 사용자의 글 목록 조회
const getAccountFollowArticles = async () => await axiosInterceptor.get('/account/follow/articles');

// 내가 구독하는 사용자 목록 조회
const getAccountFollowFrom = async () => await axiosInterceptor.get('/account/follow/from');

// 나를 구독하는 사용자 목록 조회
const getAccountFollowTo = async () => await axiosInterceptor.get('/account/follow/to');

// 내가 작성한 댓글 목록 조회
const getAccountComments = async () => await axiosInterceptor.get('/account/comments');

export {
	accountJoin,
	accountLogin,
	getAccountProfile,
	getAccountRefreshToken,
	saveFollow,
	deleteFollow,
	getAccountCounts,
	getAccountArticles,
	getAccountBookmarks,
	getAccountFollowArticles,
	getAccountFollowFrom,
	getAccountFollowTo,
	getAccountComments
}