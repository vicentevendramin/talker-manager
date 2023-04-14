const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (!age || age === '') {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (Number(age) < 18 || !Number.isInteger(age)) {
    return res.status(400)
      .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }

  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }

  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!talk.watchedAt || talk.watchedAt === '') {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!dateRegex.test(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

const validateRate = (req, res, next) => {
  const { talk } = req.body;

  if (Number(talk.rate) > 5 || Number(talk.rate) < 1) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  if (!talk.rate || talk.rate === '') {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  next();
};

const validateDecimalRate = (req, res, next) => {
  const { talk } = req.body;

  if (parseInt(Number(talk.rate), 10) !== Number(talk.rate)) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }

  next();
};

module.exports = {
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  validateDecimalRate,
};