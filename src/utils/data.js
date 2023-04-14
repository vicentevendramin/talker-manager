const fs = require('fs').promises;

const talkerData = 'src/talker.json';

const getData = async () => {
  const data = await fs.readFile(talkerData, 'utf-8');
  const result = JSON.parse(data);
  return result;
};

module.exports = {
  getData,
};
