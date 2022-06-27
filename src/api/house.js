import axios from '../config/axios';

export const getAllHouse = () => axios.get('/allHouses');
export const getHouseById = (id) => axios.get('/allHouses' + { id });

// export const getAllPost = () => axios.get("/users/posts");

// export const createComment = (title, postId) =>
//   axios.post(`/post/${postId}/comments`, { title });

// export const deleteComment = (postId, commentId) =>
//   axios.delete(`/post/${postId}/comments/${commentId}`);

// export const createLike = (postId) => axios.post(`/post/${postId}/like`);
// export const deleteLike = (postId) => axios.delete(`/post/${postId}/like`);