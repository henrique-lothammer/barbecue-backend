const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

function logRequests(request, response, next) {
  const { method, url } = request;
  const log = `[${method.toUpperCase()}] ${url}`;

  console.time(log);
  next();
  console.timeEnd(log);
}

app.use(logRequests);
app.use(routes);

app.listen(3333, () => {
  console.log('back-end started on http://localhost:3333');
});
