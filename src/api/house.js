import axios from '../config/axios';

export const postHouse = (input) => axios.post('/houses/create', input);

export const getAllHouse = () => axios.get('/allHouses');
export const getHouseById = (id) => axios.get(`/allHouses/${id}`);
export const getHouseByUserId = () => axios.get(`/houses/user`);
export const updateHouseByUserId = (body) =>
  axios.patch(`/houses/update`, body);
