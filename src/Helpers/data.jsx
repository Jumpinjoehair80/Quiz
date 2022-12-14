import axios from 'axios'
const baseURL = 'https://opentdb.com/api.php?amount=10&type=multiple'

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default getAll