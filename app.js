require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const connectionString = process.env.MONGODB_URL + process.env.DATABASE_NAME
const connectDB = require('./db/connectDB')
const authRoute = require('./routers/auth')
const jobsRoute = require('./routers/jobs')
const notFound = require('./middlewares/404')
const errorHandler = require('./middlewares/errorHandlingMiddleware')
const authenticateUser = require('./middlewares/authentication')
require('express-async-errors')
const helmet = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

//middlewares
app.set('trust proxy', 1)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
)
app.use(cors())
app.use(helmet())
app.use(xss())
app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/jobs', authenticateUser, jobsRoute)
app.use(errorHandler)
app.use(notFound)

//conenect db

const start = async () => {
  try {
    //connect db
    await connectDB(connectionString)
    console.log('db is connected')
    app.listen(PORT, () => {
      console.log('Server is running on port 3000')
    })
  } catch (error) {
    console.error(error)
  }
}

start()
