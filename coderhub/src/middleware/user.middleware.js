const errorTypes = require('../constants/error-types');
const service = require('../service/user.service');
const md5password = require('../utils/password-handle');

// 使用这种方式, 定义了一个 async 的函数对象. 
const verifyUser = async (ctx, next) => {
  // 1.获取用户名和密码
  const { name, password } = ctx.request.body;

  // 2.判断用户名或者密码不能空
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  // 3.判断这次注册的用户名是没有被注册过
  const result = await service.getUserByName(name);
  if (result.length) {
    const error = new Error(errorTypes.USER_ALREADY_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }

  // 只有真正所有的逻辑都正常通过的时候, 才会使用 next 调用下一步的流程, 
  // 中间件, 就是进行逻辑的分块处理. 
  await next();
}

// 这里的 password, 不是说进行是否 valid 的判断, 而是直接进行 MD5, 这是一个通用概念, 不进行明文的存储 .
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5password(password)

  await next();
}

module.exports = {
  verifyUser,
  handlePassword
}
