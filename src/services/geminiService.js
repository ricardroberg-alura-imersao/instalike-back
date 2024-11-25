import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gerarDescricaoComGemini(imageBuffer) {
  const prompt =
    "Gere uma descrição em português do brasil para a seguinte imagem, contendo um parágrafo simples, deixo a seu critério a melhor descrição";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    const text = res.response.text();
    // Remove todas as quebras de linha
    const textoSemQuebras = text.replace(/\n/g, "");

    // Divide o texto por dois pontos e pega a segunda parte (a descrição)
    const descricao = textoSemQuebras.split(":")[1].trim();
    return descricao || "Alt-text não disponível.";
  } catch (erro) {
    console.error("Erro ao obter alt-text:", erro.message, erro);
    throw new Error("Erro ao obter o alt-text do Gemini.");
  }
}
