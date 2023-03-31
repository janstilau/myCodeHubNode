const app = require('./app');
// 真正的启动, 其实是在 app 中. 在 app 的 get 过程中, 已经创建了相应的对象, 进行了设置. 
require('./app/database');
// 这里是为了预先启动???

const config = require('./app/config');

app.listen(config.APP_PORT, () => {
  console.log(`服务器在${config.APP_PORT}端口启动成功~`);
});
