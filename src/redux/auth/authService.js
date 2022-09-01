import axios from 'axios';

const API_URL = 'https://planetbase-api.onrender.com/api/auth/signup/'

//register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register,
};

export default authService;