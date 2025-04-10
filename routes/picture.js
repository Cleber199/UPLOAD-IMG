// Importa o módulo do Express para configurar as Rotas
const express = require("express");

// Cria a instância do roteador do express para definir ROTAS
const router = express.Router();

// Importa a configuração do Multer para ligar com uploads de arquivos
const upload = require("../config/multer");

// Importa o controlador da img, onde tem todas as funções e busca
const PictureController = require("../controllers/PictureController");

// Definindo a rota POST para criar, e fazerupload da imagem 
router.post("/", upload.single("file"), PictureController.create);

// Definindo a rota GET para buscar todas as imagens do DB
router.get("/", PictureController.findAll)

// Definindo a rota GET para obter uma img. específica
router.get("/:id/image", PictureControllergetimage);

// Definindo a Rota DELETE para apagar imagens
router.delete(":id", PictureController.remove);

router.put("/:id", upload.single("file"), PictureController.update);

// Exportando o arquivo para utilizar no app.js
module.exports = router;