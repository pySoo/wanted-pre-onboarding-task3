import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const apiClient = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

apiClient.interceptors.response.use(({ data }) => data);

export default apiClient;
