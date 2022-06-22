'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const tasks = [
  {
    id: 1,
    text: 'sample task 1',
    priority: undefined,
    completed: false,
  },
];

app.get('/task/all', function (req, res) {
  res.send(tasks);
});

app.get('/task/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenTask = tasks.find((task) => task.id == idParam);
  res.send(chosenTask);
});

app.listen(port, () => {
  console.log(`server running @ http://localhost:${port} 🔗`);
});
