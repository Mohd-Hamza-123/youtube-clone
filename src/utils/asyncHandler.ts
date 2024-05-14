import { NextFunction, Request, Response } from "express"


const asyncHandler = (requestHandler: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))

    }
}


export { asyncHandler }


// const asyncHandler = (reqHandler) => async (req, res, next) => {
//     try {
//         await reqHandler(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }