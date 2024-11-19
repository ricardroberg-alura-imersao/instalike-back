import express from "express"

const app = express();

app.listen(3000, ()=>{
  console.log("Server listening!");
});

app.get("/", (rec, resp)=>{
  resp.status(200).send("Welcome to Imersão Alura");
});