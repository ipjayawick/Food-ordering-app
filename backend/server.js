import express from 'express'
import { config } from 'dotenv'
import connectDB from './config/db.js'
config()

const port=process.env.PORT || 3000
const app = express()
// connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})