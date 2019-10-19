const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /user/1
// Request body = { "name": "Diego". "email": "diego@rocketseat.com"}

server.get('/users/:id', (req, res) => {
  const nome = req.query.nome;
  const { id } = req.params;
  return res.json({ message: `Buscando o usário ${id}` });
});

server.listen(3000);
