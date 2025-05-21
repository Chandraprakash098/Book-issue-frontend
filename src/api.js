// import axios from 'axios';

// const API_BASE_URL = 'https://book-issue.onrender.com/api';

// export const getToken = () => localStorage.getItem('token');

// export const setToken = (token) => localStorage.setItem('token', token);

// export const clearToken = () => localStorage.removeItem('token');

// export const isLoggedIn = () => !!getToken();

// export const validateToken = async () => {
//   if (!getToken()) return false;
//   try {
//     await axios.get(`${API_BASE_URL}/admin/requests`, {
//       headers: { 'x-auth-token': getToken() },
//     });
//     return true;
//   } catch {
//     clearToken();
//     return false;
//   }
// };

// export const fetchWithAuth = async (url, options = {}) => {
//   const token = getToken();
//   const headers = {
//     'Content-Type': 'application/json',
//     ...(token ? { 'x-auth-token': token } : {}),
//   };
//   const response = await axios({
//     url: `${API_BASE_URL}${url}`,
//     ...options,
//     headers,
//   });
//   return response.data;
// };

// export const submitStudentForm = async (formData) => {
//   const response = await axios.post(`${API_BASE_URL}/student/submit`, formData);
//   return response.data;
// };

// export const adminLogin = async (formData) => {
//   const response = await axios.post(`${API_BASE_URL}/admin/login`, formData);
//   return response.data;
// };

// export const updateAdminProfile = async (formData) => {
//   return fetchWithAuth('/admin/update-profile', {
//     method: 'PUT',
//     data: formData,
//   });
// };

// export const handleRequestAction = async (studentId, action) => {
//   return fetchWithAuth(`/admin/${action}/${studentId}`, {
//     method: 'PUT',
//   });
// };

// export const submitFeedback = async (formData) => {
//   return fetchWithAuth('/feedback/submit', {
//     method: 'POST',
//     data: formData,
//   });
// };

// export const getFeedbacks = async () => {
//   return fetchWithAuth('/feedback/feedback');
// };


import axios from 'axios';

const API_BASE_URL = 'https://book-issue.onrender.com/api';

export const getToken = () => localStorage.getItem('token');

export const setToken = (token) => {
  localStorage.setItem('token', token);
  // Dispatch custom event to notify token change
  window.dispatchEvent(new Event('authChange'));
};

export const clearToken = () => {
  localStorage.removeItem('token');
  // Dispatch custom event to notify token change
  window.dispatchEvent(new Event('authChange'));
};

export const isLoggedIn = () => !!getToken();

export const validateToken = async () => {
  if (!getToken()) return false;
  try {
    await axios.get(`${API_BASE_URL}/admin/requests`, {
      headers: { 'x-auth-token': getToken() },
    });
    return true;
  } catch {
    clearToken();
    return false;
  }
};

export const fetchWithAuth = async (url, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'x-auth-token': token } : {}),
  };
  const response = await axios({
    url: `${API_BASE_URL}${url}`,
    ...options,
    headers,
  });
  return response.data;
};

export const submitStudentForm = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/student/submit`, formData);
  return response.data;
};

export const adminLogin = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/admin/login`, formData);
  return response.data;
};

export const updateAdminProfile = async (formData) => {
  return fetchWithAuth('/admin/update-profile', {
    method: 'PUT',
    data: formData,
  });
};

export const handleRequestAction = async (studentId, action) => {
  return fetchWithAuth(`/admin/${action}/${studentId}`, {
    method: 'PUT',
  });
};

export const submitFeedback = async (formData) => {
  return fetchWithAuth('/feedback/submit', {
    method: 'POST',
    data: formData,
  });
};

export const getFeedbacks = async () => {
  return fetchWithAuth('/feedback/feedback');
};