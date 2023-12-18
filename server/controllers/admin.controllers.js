import Survey from '../models/survey.model.js'
import User from '../models/user.model.js'

const createSurvey = async (req, res) => {
  const { title, description, questions } = req.body
  const { email } = req.user

  const creator = await User.findOne({ email: email })
  const { _id } = creator.toJSON()

  if (!title || !description || !questions) {
    res.status(400).send({ message: 'all fields are required' })
  }

  try {
    const survey = new Survey({
      creator: _id,
      title,
      description,
      questions
    })

    await survey.save()

    res.status(200).send({ id: _id })
  } catch (e) {
    res.status(500).send({ error: e })
  }
}

export { createSurvey }
