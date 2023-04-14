const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(16).toString('hex');

console.log(generateToken);