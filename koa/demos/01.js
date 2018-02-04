const Koa = require('koa');
const app = new Koa();

//hello middleWare
const hello = (ctx) => {
  ctx.response.body = 'Hello koa'
};

app.use(hello);

app.listen(3000);