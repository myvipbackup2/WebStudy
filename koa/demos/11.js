const Koa = require('koa');
const compose = require('koa-compose');

const app = new Koa();

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const middleWares = compose([logger, main]);

app.use(middleWares);

app.listen(3000);