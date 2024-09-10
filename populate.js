require('dotenv').config()

const connectDB = require('./db/connect')
const jobs = require('./models/Job')

const mockData = require('./mock-data.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await jobs.deleteMany()
    await jobs.create(mockData)

    console.log('Successfully added')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

start()
