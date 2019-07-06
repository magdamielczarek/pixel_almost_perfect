import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://pixel-8ef8f.firebaseio.com/'
});

export default axiosInstance;
