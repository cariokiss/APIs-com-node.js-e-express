// import http from "http";
import app from './src/app.js';

const PORT = 3000;

// criando rotas
// const rotas = {
//     "/": "Curso de Node.js",
//     "/livros": "Entrei na rota livros",
//     "/autores": "Entrei na rota autores"
// }

// criando o servidor
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(rotas[req.url]);
// })

app.listen(PORT, () => {
    console.log("servidor escutando!")
})