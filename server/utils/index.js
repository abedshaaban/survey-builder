import jwt from 'jsonwebtoken'

const JWT_SECRET = 'we_hit_those'

const createJWT = (payload) => {
  return jwt.sign(
    {
      ...payload
    },
    JWT_SECRET,
    { expiresIn: '2 days' }
  )
}

const decodeJWT = (token) => {
  return jwt.verify(token, JWT_SECRET)
}

export { createJWT, decodeJWT }
