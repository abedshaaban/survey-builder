import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  title: { type: String, enum: ['input', 'checkbox', 'radio'], required: true },
  type: {
    type: String,
    enum: ['text-input', 'check-box', 'radio']
  },
  questions: {
    type: [
      { id: { type: String, required: true }, label: { type: String, required: true } }
    ],
    required: true
  },
  placeholder: { type: String, required: false }
})

const surveySchema = new mongoose.Schema({
  creator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: {
    type: String,
    required: true
  },
  questions: [questionSchema]
})

const Survey = mongoose.model('Survey', surveySchema)

export default Survey
