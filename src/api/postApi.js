import axiosInterceptor from './axios/axiosInterceptor';

// 스토리 목록 조회
// const getPosts = async (page, popular, keyword, search) => await axiosInterceptor.get(`/post/articles?page=${page}&popular=${popular}&keyword=${keyword}&search=${search}`);

const getPosts = async () => await axiosInterceptor.get(`/post/articles`);


// 스토리 상세조회
const getPost = async (postId) => await axiosInterceptor.get(`/post/article/${postId}`);
   
// 북마크 저장
const savePostBookmark = async (postId) => await axiosInterceptor.post(`/post/article/${postId}/bookmark`);

// 북마크 취소
const deletePostBookmark = async (postId) => await axiosInterceptor.delete(`/post/article/${postId}/bookmark`);

// 공감하기 저장
const savePostEmoji  = async (postId, emojiCode) => await axiosInterceptor.post(`/post/article/${postId}/emoji/${emojiCode}`);

// 공감하기 취소
const deletePostEmoji  = async (postId, emojiCode) => await axiosInterceptor.delete(`/post/article/${postId}/emoji/${emojiCode}`);

// 공감하기 조회
const getPostReactions = async (postId) => await axiosInterceptor.get(`/post/article/${postId}/emoji`);

// 답글 조회
const getPostComments = async (postId) => await axiosInterceptor.get(`/post/article/${postId}/comments`);

// 답글 저장
const savePostComment = async (postId, commentObj) => await axiosInterceptor.post(`/post/article/${postId}/comment`, commentObj);

// 답글 삭제
const deletePostComment = async (postId, commentId) => await axiosInterceptor.delete(`/post/article/${postId}/comment/${commentId}`);

// 답글 수정
const updatePostComment = async (postId, commentId, updCommentObj) => await axiosInterceptor.put(`/post/article/${postId}/comment/${commentId}`, updCommentObj);

// 신고하기
const savePostReport = async (postReportObj) => await axiosInterceptor.post(`/post/report`, postReportObj);

export {

	getPosts,
	getPost,
	savePostBookmark,
	deletePostBookmark,
	savePostEmoji,
	deletePostEmoji,
	getPostReactions,
	getPostComments,
	savePostComment,
	deletePostComment,
	updatePostComment,
	savePostReport

}