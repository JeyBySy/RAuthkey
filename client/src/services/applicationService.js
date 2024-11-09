import axiosInstance from '../api/axiosInstance';

const ApplicationService = {
    // Fetch all applications
    getAllApplications: async () => {
        try {
            const response = await axiosInstance.get('/api/project');
            return response.data;
        } catch (error) {
            console.error('Error fetching applications:', error);
            throw error;
        }
    },

    // Create a new application
    createApplication: async (applicationData) => {
        try {
            const response = await axiosInstance.post('/api/project', applicationData);
            return response.data;
        } catch (error) {
            console.error('Error creating application:', error);
            throw error;
        }
    },

    // Update an application by ID
    updateApplication: async (projectID, updatedData) => {
        try {
            const response = await axiosInstance.put(`/api/project/${projectID}`, updatedData);
            return response.data;
        } catch (error) {
            console.error(`Error updating application with ID ${projectID}:`, error);
            throw error;
        }
    },

    // Delete an application by ID
    deleteApplication: async (projectID) => {
        try {
            const response = await axiosInstance.delete(`/api/project/${projectID}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting application with ID ${projectID}:`, error);
            throw error;
        }
    }
};

export default ApplicationService;
