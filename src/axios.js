import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend77.herokuapp.com'
})

export default instance;

