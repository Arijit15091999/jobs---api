const User = require('../models/user.model')
const { StatusCodes } = require('http-status-codes')
const asyncWrapper = require('../middlewares/asyncWrapper')
const { BadRequestError, UnAuthorizedError } = require('../errors/index.js')

// register user
const register = asyncWrapper(async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ name: user.name, token })
})

// login user
const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('please provise email and password')
  }

  const user = await User.findOne({ email })
  if(!user) {
    throw new UnAuthorizedError();
  }

  // compare password

  isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) { 
    throw new UnAuthorizedError('incorrect password');
  }
  const token = user.createJWT()


  res.status(StatusCodes.OK).json({user:{name:user.name}, token})
  
})

module.exports = {
  register,
  login
}
