import axios from "axios";
import { api } from "../config/api";

const instance = axios.create({
  baseURL: api.baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
