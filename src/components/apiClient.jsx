import axios from 'axios';

const token = localStorage.getItem('jwtToken'); // Retrieve the JWT token from storage

const apiClient = axios.create({
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default apiClient

// Make authenticated API requests using apiClient
