import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';

// Define a função 'routes' usando uma arrow function
const routes = (app) => {
    // Define a rota raiz ('/') e responde com 'Curso de Node.js' quando um GET é feito
    app.route('/').get((req, res) => res.status(200).send('Curso de Node.js'));

    // Usa middleware para interpretar JSON e inclui as rotas de 'livrosRoutes.js'
    app.use(express.json(), livros, autores);
};

// Exporta a função 'routes' como padrão do módulo
export default routes;