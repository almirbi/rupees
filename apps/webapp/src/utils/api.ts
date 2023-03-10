import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
