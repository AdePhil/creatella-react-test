import axios from 'axios';
export const fetchProducts = () => {
  return axios.get('/products');
}