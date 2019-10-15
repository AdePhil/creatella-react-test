import axios from 'axios';
export const fetchProducts = ({page = 1, limit = 20, sortBy}) => {
  const params = {
    _page: page,
    _limit: limit,
    ...(sortBy && {_sort: sortBy})
  }
  return axios.get('/products', { params});
}