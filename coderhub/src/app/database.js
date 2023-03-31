const mysql = require('mysql2');

const config = require('./config');

// 要注意, 服务器 Server 是另外的一套程序. 和自己经常玩的本地 DB 是不一样的. 
const connections = mysql.createPool({
  // host: config.MYSQL_HOST,
  // port: config.MYSQL_PORT,
  // database: config.MYSQL_DATABASE,
  // user: config.MYSQL_USER,
  // password: config.MYSQL_PASSWORD
  host: 'localhost',
  port: 3306,
  database: 'codehub',
  user: 'root',
  password: 'Coderwhy888.'
});

connections.getConnection((err, conn) => {
  if (err)  {
    console.log(err)
  } else {
    conn.connect((err) => {
      if (err) {
        console.log("连接失败:", err);
      } else {
        console.log("数据库连接成功~");
      }
    })
  }
});

module.exports = connections.promise();
