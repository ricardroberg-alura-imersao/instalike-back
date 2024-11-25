import express from "express";
import multer from "multer";
import {
  adicionarNovoPost,
  listarPosts,
  uploadImagem,
} from "../controllers/postsController.js";

// linux ou mac não precisa do storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ dest: "./uploads" });
// linux ou mac não precisa do storage
// const upload = multer({ dest: "./uploads" });

export const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarPosts);
  app.post("/posts", adicionarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

// function buscarPostPorId(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }

// app.get("/posts/:id", (req, resp) => {
//   const index = buscarPostPorId(req.params.id);
//   resp.status(200).json(posts[index]);
// });
