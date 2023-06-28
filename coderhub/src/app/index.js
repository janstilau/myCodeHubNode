const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./error-handle');
const useRoutes = require('../router');

const app = new Koa();

// useRoutes 是一个函数, 通过 ../router 这个文件导出的. 统一在这个文件里面, 进行
app.useRoutes = useRoutes;

app.use(bodyParser());
app.useRoutes();

const publicPath = path.join(__dirname, '../public');
app.use(serve(publicPath));

// 所有的错误处理, 都是通过 error 进行的发送. 
app.on('error', errorHandler);

module.exports = app;
