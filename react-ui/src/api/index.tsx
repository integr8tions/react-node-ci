import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const login = () => api.post(`/login`);
export const getInfo = () => api.get(`/info`);
export const getUserById = (id: number) => api.get(`/users/${id}`);
export const getOrdersByUserId = (id: number) => api.get(`/users/${id}/orders`);
export const deleteOrderById = (id: number) => api.delete(`/orders/${id}`);

const apis = {
  login,
  getInfo,
  getUserById,
  getOrdersByUserId,
  deleteOrderById,
};

export default apis;
