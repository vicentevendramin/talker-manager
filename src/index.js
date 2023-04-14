const express = require('express');
const { getData } = require('./utils/data');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (_req, res) => {
  const result = await getData();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(200).json([]);
  }
});
