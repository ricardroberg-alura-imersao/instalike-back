import { MongoClient } from "mongodb";

export async function conectarAoBanco(StringConexao){
  let mongoClient;

  try {
    mongoClient = new MongoClient(StringConexao);
    console.log("Conectando ao cluster do banco de dados...");
    await mongoClient.connect();
    console.log("Conectado ao MongoDB Atlas com sucesso!");

    return mongoClient;
  } catch (error) {
    console.log("Falha na conexão com o bando de dados!");
    process.exit();
  }
}