import { conectarAoBanco } from "../config/dbConfig.js";

export const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosOsPosts() {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}
