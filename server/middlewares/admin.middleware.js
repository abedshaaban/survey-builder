import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]

  if (!token) {
    res.status(403).send('Forbidden')
  } else {
    try {
      const decoded = jwt.verify(token, 'we_hit_those')

      const user = await User.findOne({ email: decoded?.email }).select('-password')

      if (user?.role === 2) {
        req.user = user
        next()
      } else {
        res.status(403).send('Forbidden')
      }
    } catch (error) {
      console.error('JWT Verification Error:', error.message, error.name)
      // Handle the error, e.g., return an error response
    }
  }
}

export default authMiddleware
