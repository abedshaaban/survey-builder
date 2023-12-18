import mongoose from 'mongoose'

const questionsSchema = new mongoose.Schema({
  question: { type: String, required: true },
  type: {
    type: String,
    enum: ['input', 'checkbox', 'radio'],
    default: 'input'
  },
  suggestedAnswers: [{ type: String }]
})

const surveySchema = new mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  questions: [questionsSchema]
})

const Survey = mongoose.model('Survey', surveySchema)

export default Survey
