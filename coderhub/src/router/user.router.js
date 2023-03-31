const Router = require('koa-router');
const {
  create,
  avatarInfo
} = require('../controller/user.controller');
const {
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware');

const userRouter = new Router({prefix: '/users'});

// 真正的接口处理, 其实是要经历流程的. 
// 这些流程, 在不同的接口中会被复用. 在 Node 中, 是通过中间件的概念, 将一个个的小业务函数, 进行了分离. 
userRouter.post('/', verifyUser, handlePassword, create);
userRouter.get('/:userId/avatar', avatarInfo);

module.exports = userRouter;
