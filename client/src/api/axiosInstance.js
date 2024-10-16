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
    // Fetch CSRF token if not already set
    if (!config.headers['csrfmiddlewaretoken']) {
        try {
            const response = await axios.get(`${BASE_URL}/api/csrf-token`);
            const csrfToken = response.data.csrfToken;
            config.headers['csrfmiddlewaretoken'] = csrfToken;
            // console.log("dsdsdadasdasas: ", response.data);

        } catch (error) {
            console.error('Error fetching CSRF token:', error);
        }
    }
    console.log(config);

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
