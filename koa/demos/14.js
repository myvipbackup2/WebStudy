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

const main = ctx => {
  const views = Number(ctx.cookies.get('views')) + 1 || 0;
  ctx.cookies.set('views', `${views}`);
  ctx.response.body = {
    code: 200,
    msg: `${views} views`,
    views: views,
  }
};

app.use(handler);
app.use(main);

app.listen(3000);