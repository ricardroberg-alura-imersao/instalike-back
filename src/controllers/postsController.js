import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";
import {
  getTodosOsPosts,
  criarPost,
  atualizarPost,
} from "../models/postModel.js";

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
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    resp.status(200).json(postCriado);
  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ Erro: "Não foi possível enviar imagem!" });
  }
}

export async function atualizarNovoPost(req, res) {
  const id = req.params.id;
  const urlImagem = `http://localhost:3000/${id}.png`;
  try {
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
    const descricao = await gerarDescricaoComGemini(imgBuffer);

    const post = {
      imgUrl: urlImagem,
      descricao: descricao,
      alt: req.body.alt,
    };

    const postCriado = await atualizarPost(id, post);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}
