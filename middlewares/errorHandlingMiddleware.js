const { StatusCodes } = require('http-status-codes')

const errorHandleingMiddleware = (err, req, res, next) => {
  if (err.code && err.code === 11000) {
    // Duplicate key error
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ keys:err.keyValue, msg:"already in use"
 })
  }

  // Other types of errors
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({msg:err.message})
}

module.exports = errorHandleingMiddleware
