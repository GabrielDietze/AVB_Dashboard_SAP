// Definição dos tipos de respostas do SAP para a Laminadora
export interface DashboardItem  {
    TIPO_MOVIMENTO: string;
    MATERIAL: string;
    DESC_MATERIAL: string;
    ORDEM: string;
    QUANTIDADE: number;
    QUANTIDADE_PROGRMADA: number;
    MAQUINA: string;
    LOTE: string;
  }

  export interface DashboardResponse {
    RESPONSE: DashboardItem[];  
  }

// Interface para os dados tratados
export interface FormattedDashboardItem {
  TIPO_MOVIMENTO: string; 
  MATERIAL: string;
  DESC_MATERIAL: string;
  ORDEM: string;
  QUANTIDADE: number;
  QUANTIDADE_PROGRMADA: number;
  MAQUINA: string;
  LOTE: string;
  PORCENTAGEM: number; 
}