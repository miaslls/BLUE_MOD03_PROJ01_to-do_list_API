'use strict';

const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/tasks.routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(port, () => {
  console.log(`server running @ http://localhost:${port} 🔗`);
});
