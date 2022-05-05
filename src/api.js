import Axios from 'axios';

const api = Axios.create({
    baseURL:"http://3.219.136.91:8080/api/"
});

export default api;