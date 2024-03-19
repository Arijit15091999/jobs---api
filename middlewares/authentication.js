const UnAuthorizedError = require('../errors/unauthorized-error')
const jwt = require('jsonwebtoken')

const auth = function (req, res, next) {
  const authHeader = req.headers.authorization
  // console.log(authHeader.startsWith('Bearer '))
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnAuthorizedError('invalid jwt token')
  }
  const token = authHeader.split(' ')[1]
  // console.log(token)

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
    //attach user to job routes
    // const user = User.findById(payload.userId).select('-password')
    // .select('-password') :- to remove password from the resposnse of the database query
    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    throw new UnAuthorizedError('jwt can not be authorized')
  }
}

module.exports = auth
