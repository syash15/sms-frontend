import axios from "axios";

// ✅ Use Render backend in production, localhost in development
const API = axios.create({
  baseURL: "https://sms-backend-xg1y.onrender.com/api"  // Your backend URL
  // baseURL: "http://localhost:5000/api"  // Local development (optional)
});

// ✅ Auto-attach token to protected routes
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;

