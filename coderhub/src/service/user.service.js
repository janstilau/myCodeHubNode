const connection = require('../app/database');

// 创建用户, 就是将用户的数据, 塞到表里面. 
class UserService {
  async create(user) {
    const { name, password } = user;
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;
    const result = await connection.execute(statement, [name, password]);

    return result[0];
  }

  // 从数据库里面, 查询是否有对应的数据. 
  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);

    return result[0];
  }

  // 更新用户头像, 就是执行一个 Update 操作. 
  async updateAvatarUrlById(avatarUrl, userId) {
    const statement = `UPDATE user SET avatar_url = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [avatarUrl, userId]);
    return result;
  }
}

module.exports = new UserService();
