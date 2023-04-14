const fs = require('fs/promises');
const crypto = require('crypto');

const talkerData = 'src/talker.json';

const readTalkers = async () => {
  const data = await fs.readFile(talkerData, 'utf-8');
  const result = JSON.parse(data);
  return result;
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = {
  readTalkers,
  generateToken,
};