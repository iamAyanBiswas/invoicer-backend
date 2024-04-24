//here we modle the data according to "Google React Chart"



function dayChart(data){
let modifiedData=[]
    if(data.length===0){
        modifiedData[0]=["Day","Value"]
        modifiedData[1]=["","0"]
        modifiedData[2]=["","0"]
    }
    else{
        data.map((e,idx)=>{
            modifiedData[0]=["Day","Value"]
            modifiedData[idx+1]=[data[idx]._id , data[idx].everyDaySales]
        })
    }
    return modifiedData
}

function weekChart(data){
    let modifiedData=[]
    if(data.length===0){
        modifiedData[0]=["Week","Value"]
        modifiedData[1]=["","0"]
        modifiedData[2]=["","0"]
    }
    else{
        data.map((e,idx)=>{
            modifiedData[0]=["Week","Value"]
            modifiedData[idx+1]=[`Week ${data[idx]._id}` , data[idx].everyWeekSales]
        })
    }
    return modifiedData
}

function chart(dateType , data){
    let isDateType=dateType.toLowerCase()
    if(isDateType==="day"){
        let resule=dayChart(data)
        return resule
    }
    else if(isDateType==="week"){
        let resule=weekChart(data)
        return resule
    }
}


export default chart