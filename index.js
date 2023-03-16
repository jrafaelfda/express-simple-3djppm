const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.json());

app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const vetor = [];

app.get('/', (req, res) => {
  res.send('Olá mundo!');
});

app.post('/vetor', (req, res) => {
  const value = req.body.value;
  vetor.push(value);
  res.send(`Valor ${value} foi adicionado ao vetor.`);
});

app.get('/vetor', (req, res) => {
  res.json(vetor);
});

app.get('/form', (req, res) => {
  res.sendFile(path.resolve('pages/form.html'));
});
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});
