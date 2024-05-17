import { asyncHandler } from "../utils/asyncHandler";

const registerUser = asyncHandler(async (req: any, res: any) => {
    res.status(200).json({
        message: "HI"
    })

})

export {registerUser}