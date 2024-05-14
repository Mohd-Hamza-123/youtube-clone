class ApiError extends Error {

    statusCode: number
    data: any
    errors: string[]
    success: boolean = false
    stack?: string

    constructor(
        statusCode: number,
        errors = [],
        message = "something went wrong",
        stack = ""
    ) {
        super(message)
        // using super() to call the constructor of the class we are extending(Error Class).

        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.errors = errors
        this.success = false

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}