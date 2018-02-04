const Koa = require('koa');
const app = new Koa();

const main = ({ request, response }) => {

  const { path } = request;

  response.type = 'json';
  response.body = {
    code: 200,
    path,
  }


};

app.use(main);

app.listen(3000);