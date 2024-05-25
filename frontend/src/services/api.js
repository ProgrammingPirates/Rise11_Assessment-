import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = async (userData) => {
  return axios.post(`${API_URL}/auth/signup`, userData);
};

export const login = async (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const getTodos = async (token) => {
  return axios.get(`${API_URL}/todos`, {
    headers: { 'x-auth-token': token },
  });
};

export const createTodo = async (todo, token) => {
  return axios.post(`${API_URL}/todos`, todo, {
    headers: { 'x-auth-token': token },
  });
};

export const updateTodo = async (id, todo, token) => {
  return axios.put(`${API_URL}/todos/${id}`, todo, {
    headers: { 'x-auth-token': token },
  });
};

export const deleteTodo = async (id, token) => {
  return axios.delete(`${API_URL}/todos/${id}`, {
    headers: { 'x-auth-token': token },
  });
};
