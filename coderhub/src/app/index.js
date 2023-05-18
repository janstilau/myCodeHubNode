const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./error-handle');
const useRoutes = require('../router');

const app = new Koa();

app.useRoutes = useRoutes;

app.use(bodyParser());
app.useRoutes();

const publicPath = path.join(__dirname, '../public');
app.use(serve(publicPath));

// 所有的错误处理, 都是通过 error 进行的发送. 
app.on('error', errorHandler);

module.exports = app;
