const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['Exception', 'Games', 'montagem de computadores'];

server.get('/cursos/:index', (req, res) => {
    const { index } = req.paarams;

    return res.json(cursos[index]);
});

server.get('/cursos', (req, res) =>{
    return res.json(cursos);
});

server.post('/cursos', (req, res) =>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

server.put('/cursos/:index', (req, res) =>{
    const { index } = req.params;
    const { name } = req.body;

    cursos[ index ] = name;

    return res.json(cursos);
});

server.delete('/cursos/:index', (req, res) =>{
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({message: "curso deletado com sucesso"});
});

server.listen(3000);