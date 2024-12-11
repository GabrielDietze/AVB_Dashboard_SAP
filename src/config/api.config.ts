import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

console.log("API_BASE_URL:", process.env.API_BASE_URL);

// Verifica se a baseURL está configurada
if (!process.env.API_BASE_URL) {
   throw new Error("A variável de ambiente 'API_BASE_URL' não está definida.");
}

// Configuração do cliente axios
const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL, // Lê a baseURL do .env
});

module.exports = apiClient;