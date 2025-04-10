// Importando multer, upload de arquivos
const multer = require("multer");

// Configuração do Multer para salvar em memória
const storage = multer.memoryStorage();

// Middleware do multer para upload de img.
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // limite de 5MB
  },
});

// Exporta para utilizar em outro arquivo
module.exports = upload;