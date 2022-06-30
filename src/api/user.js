import axios from '../config/axios';

export const getUser = () => axios.get('/users');
export const updateUser = (updateValue) =>
  axios.patch('/users/update', updateValue);
