const express = require('express')

const app = express();

const port = 8081;

app.use(express.json());
app.get('/', (req, res) => {
    return res.json('Testing Backend');
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));
