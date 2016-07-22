import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('meow');
});

app.listen(80, () => {
  console.log('app started on port 80');
});
