import { getTodosOsPosts, criarPost } from "../models/postModel.js";
import fs from "fs";

export async function listarPosts(req, resp) {
  const posts = await getTodosOsPosts();
  resp.status(200).json(posts);
}

export async function adicionarNovoPost(req, resp) {
  const novoPost = req.body;
  try {
    const postCriado = await criarPost(novoPost);
    resp.status(200).json(postCriado);
  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ Erro: "Não foi possível criar post!" });
  }
}

export async function uploadImagem(req, resp) {
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };
  
  try {
    const postCriado = await criarPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
    fs.renameSync(req.file.path, imagemAtualizada)
    resp.status(200).json(postCriado);
  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ Erro: "Não foi possível enviar imagem!" });
  }
}
