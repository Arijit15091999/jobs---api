const { CustomApiError } = require('./CustomApiError')
const { StatusCodes } = require('http-status-codes')

class BadRequestError extends CustomApiError {
  constructor (message = 'Bad request') {
    super(message, StatusCodes.BAD_REQUEST)
  }
}

module.exports = {
  BadRequestError
}