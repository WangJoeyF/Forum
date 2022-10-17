const crypto = require('crypto');

const md5password = (password) => {
  const md5 = crypto.createHash('md5');
  //拿加密后的字符串，hex转为16进制不搞就buffer了
  const result = md5.update(password).digest('hex');
  return result;
}

module.exports = md5password;

