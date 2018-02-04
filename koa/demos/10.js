const Koa = require('koa');
const route = require('koa-route');

const app = new Koa();

const redirect = ctx => {
  ctx.response.redirect('/index')
};

const index = ctx => {
  ctx.response.body = {
    code: 200,
    page: 'index',
    msg: 'hello',
    des: 'any path will be redirect to /index'
  }
};

app.use(route.get('/index', index));
app.use(route.get('*', redirect));

app.listen(3000);