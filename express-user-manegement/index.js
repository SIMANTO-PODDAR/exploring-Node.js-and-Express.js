const express = require('express')
const app = express()
const port = 8000  /* || process.env.PORT  <-if 8000 not available)*/

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

const users = []

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.send({ message: 'User added' });
});

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})
