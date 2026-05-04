const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

const users = [
  { id: 1, name: 'simanto', email: 'simanto@email.com' },
  { id: 2, name: 'poddar', email: 'poddar@email.com' }
]

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})
