import { store } from "@/store/authSlice";
import axios from "axios";
import { Platform } from "react-native";

let baseURL = "http://192.168.8.17:8000/api";

if (__DEV__) {
  if (Platform.OS === "android") {
    baseURL = "http://10.0.2.2:8000/api";
  } else if (Platform.OS === "ios") {
    baseURL = "http://127.0.0.1:8000/api";
  } else {
    baseURL = "http://127.0.0.1:8000/api";
  }
} else {
  baseURL = "https://api.tosay.com";
}

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
