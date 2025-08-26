import axios from "axios";
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_API_URL;

// Экземпляр Axios с базовым URL
const api = axios.create({
  baseURL: API_URL,
});
// Перехватчик ответа
api.interceptors.response.use(
  // Если ответ успешен, просто возвращаем его
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          if(data.errors){
            toast.error(`Введены неверные данные`)
          }
          else toast.error(`Ошибка 400: ${data.error}`);
          break;
        case 401:
          toast.error(data.error)
          break;
        case 403:
          toast.error(`Ошибка 403: ${data.error}`);
          break;
        case 404:
          toast.error(`Ошибка 404: Голосование не найдено.`);
          break;
        case 409:
          toast.error(`Ошибка 409: ${data.error}`);
          break;
        case 500:
          toast.error(`Ошибка 500: ${data.error}`);
          break;
        default:
          if (status >= 500) {
            toast.error(`Произошла ошибка на сервере (${status}). Пожалуйста, попробуйте позже.`);
          } else {
            toast.error(`Неизвестная ошибка: ${status}, ${data.error}`);
          }
          break;
      }
    } else {
      toast.error('Сетевая ошибка. Проверьте ваше подключение.');
    }

    return Promise.reject(error);
  }
)

export const register = async (formData) => {
  const response = await api.post(`/auth/register`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const loginUser = async (email, password, role_id, remember_flag) => {
  const response = await api.post(`/auth/login`, {
    email,
    password,
    role_id,
    remember_flag,
  });
  return response.data;
};

export const getProfileData = async (authToken) => {
  const response = await api.get(`/users/profile`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const updateProfileData = async (authToken, profileData) => {
  const response = await api.put(`/users/profile`, profileData, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const changePassword = async (authToken, passwords) => {
  const response = await api.put(
    `/users/change-password/`,
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

export const getVotings = async (authToken, page = 1, find='', status='') => {
  const params = {
    page: page,
    find: find,
  }

  if (status != '') {
    params.status = status
  }

  const response = await api.get(`/votings/`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    params
  });
  return response.data;
};

export const createVoting = async (votingData, authToken) => {
  const response = await api.post(`/votings/`, votingData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};

export const getVotingData = async (votingId, authToken) => {
  const response = await api.get(`/votings/${votingId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
}

export const getVotingStats = async (votingId, authToken) => {
  const response = await api.get(`/votings/${votingId}/statistics`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
}

export const getVotingParticipants = async (votingId, authToken) => {
  const response = await api.get(`/votings/${votingId}/participants`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
}

export const getVotingResults = async (votingId, authToken) => {
  const response = await api.get(`/votings/${votingId}/results`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
}

export const registerUserForVoting = async (votingId, authToken) => {
  const response = await api.post(`/votings/${votingId}/register`, {}, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
}

export const sendVote = async (votingId, authToken, answer) => {
  const response = await api.post(`/votings/${votingId}/vote`, answer, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
}

export const deleteVote = async (votingId, authToken) => {
  const response = await api.delete(`/votings/${votingId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
}

export const getDepartments = async (pageNum = 1, authToken) => {
  const response = await api.get(`/departments/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    params:{
      page: pageNum,
    }
  });
  return response.data;
}

export const sendToArchive = async (votingId, authToken) => {
    const response = await api.put(`/votings/${votingId}/archive`, null, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
    });
    return response.data;
}

export const unArchive = async (votingId, authToken) => {
    const response = await api.put(`/votings/${votingId}/unarchive`, null, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
    });
    return response.data;
}