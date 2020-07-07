const Koa = require('koa');
const app = new Koa();

// logger
// app.use() 返回 this, 因此可以链式表达.
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-reapose-time
.use(async (ctx, next) => {
    const start = Date.now();
    await next()
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
})

// response
.use(async (ctx) => {
    ctx.body = 'Hello World!';
})

app.on('error', (err) => {
    log.error('server error', err)
})

module.exports = app