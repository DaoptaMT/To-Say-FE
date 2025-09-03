// // services/axiosClient.ts
// import axios from "axios";
// import { Platform } from "react-native";

// let baseURL = "http://127.0.0.1:8000/api";

// if (Platform.OS === "android") {
//   // Android emulator (Android Studio)
//   baseURL = "http://10.0.2.2:8000/api";
// } else if (Platform.OS === "ios") {
//   // iOS simulator
//   baseURL = "http://127.0.0.1:8000/api";
// }

// if (!__DEV__) {
//   // Hoặc đơn giản sửa tay khi test
//   baseURL = "http://192.168.8.13:8000/api";
// }

// const axiosClient = axios.create({
//   baseURL,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

// axiosClient.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     throw error.response?.data || error.message;
//   }
// );

// export default axiosClient;

import axios from "axios";

const baseURL = process.env.API_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    throw error.response?.data || error.message;
  }
);

export default axiosClient;
