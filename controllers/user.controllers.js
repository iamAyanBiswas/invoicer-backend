import { apiResponce } from "../utils/apiResponce.js"
import { handler } from "../utils/handler.js"
let user = handler(async (req, res) => {
    return res.status(201).json(
        new apiResponce(200, {login:"true"}, "User login Successfully")
    )

})

export default user