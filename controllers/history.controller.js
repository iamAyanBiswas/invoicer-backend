import { handler } from "../utils/handler.js"
import { apiError } from "../utils/apiError.js"
import { apiResponce } from "../utils/apiResponce.js"
import { invoice } from '../models/invoice.models.js';
let history = handler(async (req, res) => {
    try {
        let userDetails = req.userDetails
        let indexId = userDetails._id
        let response = await invoice.find({ indexId: indexId }).select("-_id -indexId")
        if (response) {
            return res.status(201)
                .json(
                    new apiResponce(200, { history: response }, "History submit Successfully")
                )
        }
    }
    catch (err) {
        console.log(err)
        throw new apiError(200, "Can't find history")
    }
})
export default history