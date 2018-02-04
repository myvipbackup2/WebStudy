const path = require('path');
const serve = require('koa-static');
const Koa = require('koa');

const app = new Koa();

const main = serve(path.join(__dirname));

app.use(main);
app.use((ctx, next) => {
  ctx.response.body = '<a href="/09.js">click and view static js</a>'
  next();
});

app.listen(3000);