import Koa from "koa";
const App = new Koa();

App.use(async (ctx: { body: string; }) => {
    ctx.body = 'Hello World!';
})
App.listen(3000)