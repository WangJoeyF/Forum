const connection = require('../app/database')
class UserService{
  async create(user){
//user信息存进数据库
const { name,password } = user;
const statement = `INSERT INTO users (name,password) VALUES (? , ?);`
const result = await connection.execute(statement,[name,password])
return result[0];
  }
  //查询用户姓名是否存在
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);
    return result[0];
  }
  //根据用户id更新头像url
  async updateAvatarUrlById(avatarUrl,userId){
    const statement = ` UPDATE users SET avatar_url = ? WHERE id = ?;`;
    const result = await connection.execute(statement, [avatarUrl,userId]);
    return result;
  }
  }

module.exports = new UserService();