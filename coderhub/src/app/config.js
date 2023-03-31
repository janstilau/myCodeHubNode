const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

// 这里面所有的值, 都应该是 Const 的才对. 但是JS 里面, 值可以是 CONST, 引用值是无法 Const 的.

// 这里就没有必要使用异步了, 服务器的启动, 本身就是一个低概率事件. 启动时间长一点也无妨 
// 最重要的是, 服务器启动后, 必须要保证逻辑的正确性, 这个时候一点启动时间的增加是必须的. 
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'));

module.exports = {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;

// dotenv.config() 调用之后, 会使得 process.env 里面, 增加各种配置文件中的属性, 然后将这些属性, 提取到 module.exports 这个对象里面. 
// 然后给这个对象, 增加 PRIVATE_KEY, PUBLIC_KEY 这两个属性. 

module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;
