import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const register = async (formData) => {
  const response = await axios.post(`${API_URL}/auth/register`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const loginUser = async (email, password, role_id, remember_flag) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
    role_id,
    remember_flag,
  });
  return response.data;
};

export const getProfileData = async (authToken) => {
  const response = await axios.get(`${API_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const updateProfileData = async (authToken, profileData) => {
  const response = await axios.put(`${API_URL}/users/profile`, profileData, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const changePassword = async (authToken, passwords) => {
  const response = await axios.put(
    `${API_URL}/users/change-password/`,
    passwords,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const getVotings = async (authToken, page = 1, find='') => {
  const response = await axios.get(`${API_URL}/votings/`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    params: {
      page: page,
      find: find,
    },
  });
  return response.data;
};

export const createVoting = async (votingData, authToken) => {
  const response = await axios.post(`${API_URL}/votings/`, votingData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};

export const getVotingData = async (votingId, authToken) => {
  const response = await axios.get(`${API_URL}/votings/${votingId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
}
