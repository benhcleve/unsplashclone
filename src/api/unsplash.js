import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 77e32a572ac8bb2988f7e9110d189400f5d5ee9cdd9b5197215120d7d321f4b7'
    }
});