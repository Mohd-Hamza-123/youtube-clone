class ApiResponse {
    statusCode: number
    message!: string
    //  the ! operator after a property declaration is called the definite assignment assertion operator. It tells TypeScript's type checker that you will ensure that the property will be assigned a value, and it won't be null or undefined at runtime.
    data?: string
    success: boolean

    constructor(
        statusCode: number,
        message: string,
        data: string = "Success") {
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.success = statusCode < 400
    }
}
export { ApiResponse }

