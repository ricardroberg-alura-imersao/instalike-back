import { listarUsuarios, usuarioPeloEmail } from "../controllers/usuariosController.js";

export const usuariosRoutes = (app) => {
  app.get("/usuarios", listarUsuarios);
};

export const usuarioPeloEmailRoutes = (app) =>{
app.get("/usuarios/:email", usuarioPeloEmail)
}

// function buscarPostPorId(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }

// app.get("/posts/:id", (req, resp) => {
//   const index = buscarPostPorId(req.params.id);
//   resp.status(200).json(posts[index]);
// });
