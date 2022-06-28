import axios from '../config/axios';

export const updateUser = (updateValue) =>
  axios.patch('/users/update', updateValue);
