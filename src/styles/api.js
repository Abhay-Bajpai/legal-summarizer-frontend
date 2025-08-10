import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE, // Read from env
});

export default API;
