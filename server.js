import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Gato fofo olhando",
    imagem: "https://placecats.com/millie/300/300",
  },
  {
    id: 2,
    descricao: "Gato ronronando no colo",
    imagem: "https://placecats.com/millie/300/300",
    // "https://placekitten.com/250/250"
  },
  {
    id: 3,
    descricao: "Gatinho brincando com um barbante",
    imagem: "https://placecats.com/millie/300/300",
    // "https://placecats.com/300/400"
  },
  {
    id: 4,
    descricao: "Gato preto misterioso",
    imagem: "https://placecats.com/millie/300/300",
    // "https://placekitten.com/200/200"
  },
  {
    id: 5,
    descricao: "Gatinho branco fofo",
    imagem: "https://placecats.com/millie/300/300",
    // "https://placekitten.com/300/300"
  },
];
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening!");
});

app.get("/posts", (req, resp) => {
  resp.status(200).json(posts);
});

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, resp) => {
  const index = buscarPostPorId(req.params.id);
  resp.status(200).json(posts[index]);
});
