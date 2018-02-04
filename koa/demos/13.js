const Koa = require('koa');

const app = new Koa();

const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    const errCode = err.statusCode || err.status || 500;
    ctx.response.status = errCode;
    ctx.response.body = {
      code: errCode,
      desc: err,
    };
  }
};

app.use(handler);
app.use(ctx => {
  ctx.throw(503)
});

app.listen(3000);