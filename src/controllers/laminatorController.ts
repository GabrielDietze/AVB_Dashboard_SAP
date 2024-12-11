import { Request, Response } from 'express';
import { getDataFromSap  } from '../services/ApiService'; // Importe a função getLaminatorData do service
import { formatLaminatorData } from '../utils/laminator/dataFormatter'; // Importe a função formatLaminatorData do utils

// Função que busca os dados do laminador
export const index = async (req: Request, res: Response) => {
  try {

    const data = await getDataFromSap('API_DASHBOARDS_SAP_WEB'); // chama minha função para buscar dados do sap
    const formattedData = formatLaminatorData(data); // Formata os dados obtidos

    res.json(formattedData); // Retorna os dados obtidos no serviço

  } catch (error: any) {

    res.status(500).json({ error: error.message });

  }
};