import express from "express";
import { postRoutes } from "./src/routes/postsRoutes.js";
import {
  usuarioPeloEmailRoutes,
  usuariosRoutes,
} from "./src/routes/usuariosRoutes.js";
import { initConexao } from "./src/models/usuariosModel.js";

const app = express();
app.use(express.json());

await initConexao();

postRoutes(app);
usuariosRoutes(app);
usuarioPeloEmailRoutes(app);

app.listen(3000, () => {
  console.log("Servidor escutando!");
});
