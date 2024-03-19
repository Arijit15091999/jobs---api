const asyncWrapper = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
        // console.error(error);
      next(error)
    }
  }
}

module.exports = asyncWrapper
