import { handler } from '../utils/handler.js'
import { apiError } from '../utils/apiError.js'
import { apiResponce } from '../utils/apiResponce.js'
import { invoice } from '../models/invoice.models.js';
import setDayName from '../function/day.function.js';
import chart from '../function/chart.function.js';
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
const threeMonthsAgo = new Date();
threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);



let getDataforAnalytics = handler(async (req, res) => {
    let userDetails=req.userDetails
    let indexId=userDetails._id
    try {
        let perDay = await invoice.aggregate([
            {
                $match: {
                    indexId: indexId,
                    date: { $gte: sevenDaysAgo }
                }
            },
            {
                $group: {
                    _id: {
                        $isoDayOfWeek: "$date"
                    },
                    everyDaySales: {
                        $sum: "$totalValueOfParchase"
                    }
                }
            }
        ])

        let perWeek = await invoice.aggregate([
            {
                $match: {
                    indexId: indexId,
                    date: { $gte: threeMonthsAgo }
                }
            },
            {
                $group: {
                    _id: {
                        $week: "$date"
                    },
                    everyWeekSales: {
                        $sum: "$totalValueOfParchase"
                    }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ])
        perDay = setDayName(perDay)
        perDay=chart("day",perDay)
        perWeek=chart("week",perWeek)
        return res.status(201)
            .json(
                new apiResponce(200, {perDay:perDay , perWeek:perWeek}, "Analytics send Successfully")
            )

    }
    catch (err) {
        throw new apiError(200,"Error to load Analytics")
    }
})





export default getDataforAnalytics






// {
//     _id: "$date",
//     everyDaySells:{
//       $sum:"$totalValueOfParchase"
//     }
//   }












