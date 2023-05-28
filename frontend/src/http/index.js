import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// list of all the endpoints
export const sendOtp = (data) => api.post("/api/send-otp", data);
export const varifyOtp = (data) => api.post("/api/varify-otp", data);
export const activate = (data) => api.post("/api/activate", data);

export default api;
