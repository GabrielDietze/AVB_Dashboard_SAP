import express from "express";
import dotenv from "dotenv";
const laminator = require("./routes/laminator");
 
// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use("/api", laminator);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
