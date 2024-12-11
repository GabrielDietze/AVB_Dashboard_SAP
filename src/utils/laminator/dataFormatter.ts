import { REFUSED } from 'dns';
import { DashboardResponse, FormattedDashboardItem } from '../../types/sapResponses/laminatorResponses';

/**
 * Função para tratar os dados da API e aplicar as transformações necessárias.
 * @param data - Dados da API que contêm a chave 'RESPONSE'.
 * @returns Array de itens no formato tratado.
 */

export const formatLaminatorData = (data: DashboardResponse): FormattedDashboardItem[] => {
    // Acessa o array de itens dentro de data.RESPONSE
    return data.RESPONSE.map(item => ({
      ...item, // Copia os outros campos
      TIPO_MOVIMENTO: mapTipoMovimento(item.TIPO_MOVIMENTO), // Mapeia para 'produção' ou 'consumo'
      PORCENTAGEM: calculatePercentage(item.QUANTIDADE, item.QUANTIDADE_PROGRMADA), // Calcula a porcentagem
      MATERIAL: removeLeadingZeros(item.MATERIAL), // Remove os zeros à esquerda
    }));
  };
  
/**
* Função para mapear o TIPO_MOVIMENTO para uma string correspondente.
* @param tipoMovimento - Valor numérico do tipo de movimento.
* @returns String correspondente ao tipo de movimento.
*/

const mapTipoMovimento = (tipoMovimento: string): string => {
 switch (tipoMovimento) {
   case '101':
     return 'Produção';
   case '261':
     return 'Consumo';
   default:
     return 'desconhecido'; // Caso não seja 101 ou 261
 }
};



/**
 * Função para calcular a porcentagem com base na quantidade e quantidade programada.
 * @param quantity - Quantidade atual.
 * @param programmedQuantity - Quantidade programada.
 * @returns Porcentagem calculada.
 */

const calculatePercentage = (quantity: number, programmedQuantity: number): number => {
  const percentage = programmedQuantity > 0 ? (quantity / programmedQuantity) * 100 : 0;
  return parseFloat(percentage.toFixed(2)); // Arredonda para 2 casas decimais
};


/**
 * Função para remover os zeros à esquerda de um número.
 * @param value - Valor a ser tratado.
 * @returns Valor sem zeros à esquerda.
 */

const removeLeadingZeros = (value: string): string => {
  return value.replace(/^0+/, ''); // Remove todos os zeros à esquerda
}