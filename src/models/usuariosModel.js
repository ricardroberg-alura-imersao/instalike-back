import { conectarAoBanco } from "../config/dbConfig.js";

let conexao;

export const initConexao = async () => {
  conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
};

export async function getTodosOsUsuarios() {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("usuarios");
  return colecao.find().toArray();
}

export async function getUsuarioPeloEmail(email) {
  const colecao = conexao.db("imersao-instabytes").collection("usuarios");
  const usuarioPeloEmail = await colecao.findOne({email:email})
  return usuarioPeloEmail
}
