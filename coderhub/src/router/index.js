const fs = require('fs');


const useRoutes = function() {
  // 通过这样, 一个类似于元编程的写法, 将 router 中的各个方法提取出来了. 
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') return;
    const router = require(`./${file}`);
    // 各个 router, 都是一个 Router 对象. get, post 等方法, 最终都要到 routes() 中去. 
    this.use(router.routes());
    this.use(router.allowedMethods());
  })
}

module.exports = useRoutes;
