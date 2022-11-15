const express = require('express');
const { use } = require('./routes');

const app = express();

app(use)

app.listen(3000, () =>
  console.log('🔥 Server started at http://localhost:3000'),
);
