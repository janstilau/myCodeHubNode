const connection = require('../app/database');

class AuthService {
  // 这里主要是进行权限的验证. 
  async checkResource(tableName, id, userId) {
    const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`;
    const [result] = await connection.execute(statement, [id, userId]);
    return result.length === 0 ? false: true;
  }
}

module.exports = new AuthService();
