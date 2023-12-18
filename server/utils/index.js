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

export { createJWT }
