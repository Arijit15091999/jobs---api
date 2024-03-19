const { CustomApiError } = require('./CustomApiError')
const { StatusCodes } = require('http-status-codes')

class UnAuthorizedError extends CustomApiError {
  constructor (message = 'UnAuthorized to access this resource') {
    super(message, StatusCodes.BAD_REQUEST)
  }
}

module.exports = UnAuthorizedError
