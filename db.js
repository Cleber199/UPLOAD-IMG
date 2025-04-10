// Importa para interagir com o DB
const mongoose = require("mongoose");

// Carregando variáveis de ambiente do arquivo .ENV
require("dotenv").config();

// Configurando para permitir consultas (Restritas)
mongoose.set("strictQuery", true)

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
// Função para uso no DB 
async function main() {
  await mongoose
    .connect
    // Link do Mongo
    (`mongodb+srv://${dbUser}:${dbPassword}@cleber.94vel.mongodb.net/?retryWrites=true&w=majority&appName=Cleber`);
  // Exibe ao usuário que realizou a conexão
  console.log("Conectou ao banco de dados!");
}
// Exibe a msg ao usuário com erro
main().catch((err) => console.log(err));

// Exporta a função para utilizar em outro arquivo
module.exports = main;