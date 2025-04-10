// Exporta o models Picture para interagir com o DB
const Picture = require("../models/Picture");

// Importa o módulo fs para interagir com o sistema de arquivos
const js = require("fs");

// Função para criar uma nova imagem no banco de dados
exports.create = async (req, res) => {
  try {
    // Obtém o nome da img do corpo da requisição
    const { name } = req.body;

    // Obtém o arquivo da req. (Usado pelo Multer para fazer o Upload)
    const file = req.file;

    //Cria uma nova instância com nome e caminho do arquivo
    const picture = new Picture({
      name,
      image: file.path,
      contentType: file.mimetype
    });

    // Salva a imagem do DB
    await picture.save();

    // Retorna a resposta com a img. e uma msg. de sucesso
    res.json({ picture, msg: "Imagem salva com sucesso!" });
  } catch (error) {
    // Em caso de erro, retorna uma msg. com erro 500
    res.status(500).json({ message: "Erro ao salvar imagem!" });
  }
};

// Função para encontrar todas as imagens no banco de dados
exports.findAll = async (req, res) => {
  try {
    // Busca todas as imagens no banco de dados
    const pictures = await Picture.find();

    // Retorna todas as imagens do DB
    res.json(pictures);
  } catch (err) {
    // Em caso de erro, retorna uma resposta de erro com código 500
    res.status(500).json({ message: "Erro ao buscar as imagens!" });
  }
};

// Função para obter somente a imagem específica
exports.getimage = async (req, res) => {
  try {
    const picture = await picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    // Define o tipo da resposta para tipo da imagem
    res.set("content-Type", picture.contentType);

    // Mostra a imagem na resposta
    res.send(picture.image);
  } catch (error) {
    // Caso ocorra erro, retorna para o usuário
    res.status(500).json({ message: "Erro ao buscar imagem!" });
  }
}

exports.remove = async (req, res) => {
  try {
    // Busca a imagem no DB, com a ID enviada
    const picture = await Picture.findById(req, params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada!" });
    }

    // Remove o documento do banco de dados
    await Picture.deleteOne({ _id: req.params.id });

    // Retorna uma resposta ao Usuário
    res.json({ message: "Imagem removida com sucesso!" });
  } catch (error) {
    // Retorna erro se houver algum problema
    res.status(500).json({ message: "Erro ao exluir imagem!" });
  }
};