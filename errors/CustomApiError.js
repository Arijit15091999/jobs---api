class CustomApiError extends Error {
    constructor(message,statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createNewCustomError = (message, statusCode) => {
    return new CustomApiError(message, statusCode);
}

module.exports = {
    createNewCustomError,
    CustomApiError
}