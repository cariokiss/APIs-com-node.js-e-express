import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

// estabelece a conexão com o banco de dados
const conexao = await conectaNaDatabase();

// caso conexão falhe
conexao.on('error', (erro) => {
    console.error('erro de conexão', erro);
})

// caso conexão seja bem sucedida
conexao.once('open', () => {
    console.log('Conexão com o banco feita com sucesso');
})

const app = express();
routes(app);

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index ])
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso.");
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(204).send();
})

export default app;