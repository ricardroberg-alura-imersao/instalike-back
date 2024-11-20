import { getTodosOsUsuarios, getUsuarioPeloEmail } from "../models/usuariosModel.js";

export async function listarUsuarios(req, resp) {
  const usuarios = await getTodosOsUsuarios();
  resp.status(200).json(usuarios);
}

export async function usuarioPeloEmail(req, resp){
  const email = req.params.email; 
  console.log("EMAIL ===> ", email)
  const usuarioPorEmail = await  getUsuarioPeloEmail(email); 
  console.log("Usuário encontrado:", usuarioPorEmail); // Verifica o usuário encontrado

  if(usuarioPorEmail){
    resp.status(200).json(usuarioPorEmail);
  } else{
    resp.status(404).json("Usuário não encontrado");
  }
}
