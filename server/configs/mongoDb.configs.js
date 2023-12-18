import mongoose from 'mongoose'

const connectToMongoDB = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/survey-builder')
  const connection = mongoose.connection
  connection.on('error', (error) => {
    console.log('Error connection to MongoDB: ', error)
  })

  connection.once('open', () => {
    console.log('Connected to MongoDB...')
  })
}

export default connectToMongoDB
