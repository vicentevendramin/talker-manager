const express = require('express');
const { readTalkers, writeTalkers } = require('../utils');
const {
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  validateDecimalRate,
} = require('../middlewares/validateTalker');
const { validateToken } = require('../middlewares/validateToken');

const talkerRouter = express.Router();

talkerRouter.get('/', async (_req, res) => {
  const result = await readTalkers();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(200).json([]);
  }
});

talkerRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readTalkers();
  const talkersById = talkers.find((talker) => talker.id === Number(id));

  if (talkersById) {
    res.status(200).json(talkersById);
  } else {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

talkerRouter.post(
  '/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  validateDecimalRate,
  async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const talkers = await readTalkers();
  const newId = talkers.length + 1;

  const talkerObj = {
    id: newId,
    name,
    age,
    talk: {
      watchedAt,
      rate,
    },
  };
  await writeTalkers([...talkers, talkerObj]);
  res.status(201).json(talkerObj);
},
);

module.exports = {
  talkerRouter,
};