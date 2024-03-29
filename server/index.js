const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config({ path: 'variables.env' })

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected'))
  .catch(error => console.error(error))

const app = express()

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

