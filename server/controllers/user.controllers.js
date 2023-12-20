import User from '../models/user.model.js'
import Survey from '../models/survey.model.js'

const getUser = async (req, res) => {
  const user = req?.user

  const { password: hashedPassword, _id, ...userDetails } = user.toJSON()

  res.status(200).send({
    user: userDetails
  })
}

const getSurvey = async (req, res) => {
  const feed = await Survey.find({}, { title: 1 })

  res.status(200).send({ feed })
}

const getSurveyByID = async (req, res) => {
  const { id } = req.body

  const survey = await Survey.findById(id)

  res.status(200).send({ survey })
}

const updateProfile = async (req, res) => {
  const { firstName, lastName } = req.body
  const { email } = req.user

  const user = await User.findOne({ email })

  try {
    await user.updateOne({
      firstName: firstName || user.firstName,
      lastName: lastName || user.lastName
    })

    res.status(200).send({
      status: true
    })
  } catch (error) {
    res.status(500).send({
      status: false,
      error: error
    })
  }
}

export { updateProfile, getUser, getSurvey, getSurveyByID }
