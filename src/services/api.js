import axios from 'axios';

const API_URL = 'http://192.168.31.241:8000/api';

export const loginUser = async (email, password, role_id) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password, role_id });
    return response.data;
};

export const getProfileData = async (authToken) => {
    const response = await axios.get(`${API_URL}/users/profile`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        },
    });

    const profileData = response.data;

    const itemToSave = {
        last_name: profileData.last_name,
        first_name: profileData.first_name,
        surname: profileData.surname,
    };

    const itemToSaveAsString = JSON.stringify(itemToSave);

    localStorage.setItem('userName', itemToSaveAsString);

    return profileData;
};

export const updateProfileData = async (authToken, profileData) => {
    const response = await axios.put(`${API_URL}/users/profile/`, profileData, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const changePassword = async (authToken, passwords) => {
    const response = await axios.put(`${API_URL}/users/change-password/`, passwords, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const getVotings = async (authToken) => {
  const response = await axios.get(`${API_URL}/votings/`, {
    headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
    },
  });
  return response.data;
};