const Koa = require('koa');
const App = new Koa();

App.use(ctx => {
    ctx.body = 'Hello World!';
})
App.listen(3000)