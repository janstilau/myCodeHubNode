const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../app/config');

// 能够到这一步, 就是在前面的中间件里面, 已经完成了数据库的查询. 
// 这里的 login, 主要动作其实是添加 token .
class AuthController {
  async login(ctx, next) {
    const { id, name } = ctx.user;
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    });

    ctx.body = { id, name, token }
  }

  async success(ctx, next) {
    ctx.body = "授权成功~";
  }
}

module.exports = new AuthController();
