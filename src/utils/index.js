const fs = require('fs').promises;

const talkerData = 'src/talker.json';

const readTalkers = async () => {
  const data = await fs.readFile(talkerData, 'utf-8');
  const result = JSON.parse(data);
  return result;
};

module.exports = {
  readTalkers,
};