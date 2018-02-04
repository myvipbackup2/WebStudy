const Koa = require('koa');
const route = require('koa-route');

const app = new Koa();

const index = ({ response }) => {
  response.type = 'html';
  response.body = '<h1>this is index</h1>';
};

const goToIndex = ({ response }) => {
  response.type = 'html';
  response.body = '<a href="/">go to index</a>';
};

app.use(route.get('/', index));
app.use(route.get('*', goToIndex));

app.listen(3000);