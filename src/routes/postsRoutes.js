import express from "express";
import { listarPosts } from "../controllers/postsController.js";

export const postRoutes = (app) => {
  app.use(express.json());
  app.get("/posts", listarPosts);
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
