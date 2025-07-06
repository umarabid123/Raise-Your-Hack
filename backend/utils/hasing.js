const { hash, compare } = require("bcryptjs");
const { createHmac } = require('crypto');

exports.doHash = (value, saltValue) => {
  const result = hash(value, saltValue);
  return result;
};

exports.doHashValidation = (value, hashValue) => {
  const result = compare(value, hashValue);
  return result;
};

exports.hmacProcess = (value, key) => {
  const result = createHmac("sha256", key).update(value).digest("hex");
  return result;
};
