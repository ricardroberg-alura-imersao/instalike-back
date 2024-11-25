import { getTodosOsPosts } from "../models/postModel.js";

export async function listarPosts(req, resp) {
  const posts = await getTodosOsPosts();
  resp.status(200).json(posts);
}
