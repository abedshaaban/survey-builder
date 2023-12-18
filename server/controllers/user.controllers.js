import User from '../models/user.model.js'

const updateProfile = async (req, res) => {
  const { email, firstName, lastName } = req.body

  const user = await User.findOne({ email })

  try {
    user.updateOne({
      email: email || user.email,
      firstName: firstName || user.firstName,
      lastName: lastName || user.lastName
    })

    res.status(200).send({
      status: true
    })
  } catch (error) {
    res.status(500).send({
      status: false,
      error: e
    })
  }
}

export { updateProfile }
