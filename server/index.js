import express from 'express'
import cors from 'cors'
import connectToMongoDB from './configs/mongoDb.configs.js'
import AuthRoutes from './routes/auth.routes.js'
import UserRoutes from './routes/user.routes.js'
import AdminRoutes from './routes/admin.routes.js'
import AuthMiddleware from './middlewares/auth.middleware.js'
import AdminMiddleware from './middlewares/admin.middleware.js'

let corsConfig = {
  origin: '*'
}

const app = express()
app.use(cors(corsConfig))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('i am working fine, thank you')
})

// auth route
app.use('/auth', AuthRoutes)

// user routes
app.use('/user', AuthMiddleware, UserRoutes)

// admin routes
app.use('/admin', AdminMiddleware, AuthMiddleware, AdminRoutes)

app.listen(8000, () => {
  console.log('server up!')

  connectToMongoDB()
})
