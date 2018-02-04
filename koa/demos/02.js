const Koa = require('koa');
const app = new Koa();

const main = (ctx) => {

  if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = {
      code: 200,
      msg: 'this is a json response'
    };
  }

};

app.use(main);

app.listen(3000);