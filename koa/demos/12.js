const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  // ctx.throw(500)
  // ctx.throw(404);
  ctx.response.status = 403;
  ctx.response.body = {
    code: 403,
    msg: 'forbidden',
  }
});

app.listen(3000);