import jwt from 'jsonwebtoken'

const createJWT = (payload) => {
  return jwt.sign(
    {
      ...payload
    },
    'we_hit_those',
    { expiresIn: '2 days' }
  )
}

const decodeJWT = (token) => {
  return jwt.verify(token, 'we_hit_those')
}

export { createJWT, decodeJWT }
