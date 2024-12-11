const apiClient = require('../config/api.config'); // Importa o cliente da API
import { DashboardResponse } from '../types/sapResponses/laminatorResponses'; // Tipagem para a resposta da API

// Função que busca os dados do sap com base no business object
export const getDataFromSap = async (bussinessObject: string): Promise<DashboardResponse> => {
  try { 
    const response = await apiClient.get('', {
      headers: {
        'BUSINESS_OBJECT': bussinessObject, // Passa o BUSINESS_OBJECT no header
      },
    });
    return response.data; // Retorna a resposta com a tipagem adequada
  } catch (error) {
    throw new Error('Erro ao buscar dados do laminador'); 
  }
};
