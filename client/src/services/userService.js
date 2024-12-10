import axiosInstance from '../api/axiosInstance';

const UserService = {
    getAllUsers: async () => {
        try {
            const response = await axiosInstance.get('/api/user/all');
            return response.data;
        } catch (error) {
            console.error('Error getting all users', error);
            throw error;
        }
    },

}

export default UserService