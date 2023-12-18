import User from '../models/user.model.js'
import { decodeJWT } from '../utils/index.js'

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]

  if (!token) {
    res.status(403).send('Forbidden')
  } else {
    const decoded = decodeJWT(token)

    const user = await User.findOne({ email: decoded.email }).select('-password')

    req.user = user

    next()
  }
}

export default authMiddleware
