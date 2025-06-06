const express = require('express')
const app = express();
require('dotenv').config()
const dbConfig = require('./config/dbConfig')
const PORT = 8081;

app.use(express.json());
app.get('/', (req, res) => {
    return res.json('Testing Backend');
  });

  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
