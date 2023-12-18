import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const login = async (req, res) => {
  const { email, password } = req.body
  // check if user is available in DB
  const user = await User.findOne({ email })
  if (!user) res.status(400).send({ message: 'Invalid email/password' })
  // check if password is correct
  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) res.status(400).send({ message: 'Invalid email/password' })
  const { password: hashedPassword, _id, ...userDetails } = user.toJSON()
  // generate JWT token
  const token = jwt.sign(
    {
      ...userDetails
    },
    'we_hit_those',
    { expiresIn: '2 days' }
  )
  res.status(200).send({
    user: userDetails,
    token
  })
}

const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body
  if (!email || !password || !firstName || !lastName) {
    res.status(400).send({ message: 'all fields are required' })
  }

  try {
    const user = new User({
      email,
      password,
      firstName,
      lastName
    })

    await user.save()

    res.status(200).send({ user })
  } catch (e) {
    res.status(500).send({ error: e })
  }
}

export { login, register }
