import axios from 'axios';
const BASE_URL = "http://localhost:3000"

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use(async (config) => {
    const csrfToken = sessionStorage.getItem('csrfToken');
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    // If CSRF token exists, add it to the headers
    if (csrfToken) {
        config.headers['csrfmiddlewaretoken'] = csrfToken;
    }

    // If CSRF token is not set, attempt to fetch it and store in sessionStorage
    if (!csrfToken) {
        try {
            // const response = await axios.get(`${BASE_URL}/api/csrf-token`);
            // const csrfTokenFromServer = response.data.csrfToken;
            const csrfTokenFromServer = config.headers.csrfmiddlewaretoken
            sessionStorage.setItem('csrfToken', csrfTokenFromServer);
            // config.headers['csrfmiddlewaretoken'] = csrfTokenFromServer;
        } catch (error) {
            console.error('Error fetching CSRF token:', error);
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
