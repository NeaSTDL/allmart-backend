const express = require('express');
const envs = require('./constants/environment');
const app = express();

app.get('/', (req, res) => {
  res.send('Initial');
})

app.listen(envs.port, () => {
  console.log(`*********************`);
  console.log(`** AllMart Backend **`);
  console.log(`*********************`);
  console.log(`Port: ${envs.port}`);
})