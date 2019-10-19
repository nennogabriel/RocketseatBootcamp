const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /user/1
// Request body = { "name": "Diego". "email": "diego@rocketseat.com"}

const user = ['Diego', 'Robson', 'Victor'];

server.get('/users/:index', (req, res) => {
  const nome = req.query.nome;
  const { index } = req.params;
  return res.json(users[index]);
});

server.listen(3000);
