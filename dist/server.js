"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
// import * as Router from "koa-router";
const app = new Koa();
// const router = new Router();
// router.get('/*', async (ctx: any) => {
//     ctx.body = 'Hello World!';
// })
// app.use(router.routes());
app.use(ctx => [
    ctx.body = '33434'
]);
module.exports = app.listen(8000);
console.log('Server running on port 8000');
//# sourceMappingURL=server.js.map