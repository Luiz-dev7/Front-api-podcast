// src/services/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "/api", // importante: não usar http://localhost:3333 aqui
});
