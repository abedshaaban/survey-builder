import express from 'express'
import connectToMongoDB from './configs/mongoDb.configs.js'
import AuthRoutes from './routes/auth.routes.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello')
})

// auth route
app.use('/auth', AuthRoutes)

app.listen(8000, () => {
  console.log('server up!')

  connectToMongoDB()
})
