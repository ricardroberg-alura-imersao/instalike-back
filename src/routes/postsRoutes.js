import express from "express";
import multer from "multer";
import cors from "cors"
import {
  adicionarNovoPost,
  atualizarNovoPost,
  listarPosts,
  uploadImagem,
} from "../controllers/postsController.js";

const corsOption = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

// linux ou mac não precisa do storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads" });
// linux ou mac não precisa do storage
// const upload = multer({ dest: "./uploads" });

export const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOption))

  app.get("/posts", listarPosts);
  app.post("/posts", adicionarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};
