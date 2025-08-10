
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE, // uses Vercel env var
});

export default API;
