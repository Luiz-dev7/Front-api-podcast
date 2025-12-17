// src/services/podcastServices.js
import { api } from "../api/api";

export async function getPodcasts() {
  try {
    const response = await api.get("/list"); // não precisa repetir /api
    console.log("Resposta bruta da API 👉", response);
    return response.data.podcasts || response.data;
  } catch (error) {
    console.error("Erro ao buscar podcasts:", error);
    return [];
  }
}
