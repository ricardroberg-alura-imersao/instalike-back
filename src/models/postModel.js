import { conectarAoBanco } from "../config/dbConfig.js";

export const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosOsPosts() {
  console.log("1");
  const db = conexao.db("imersao-instabytes");
  console.log("2");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}
