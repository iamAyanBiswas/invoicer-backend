function setDayName(arr){
    for (let i in arr){
        if(arr[i]._id===1){arr[i]._id="Monday"}
        else if(arr[i]._id===2){arr[i]._id="Tuesday"}
        else if(arr[i]._id===3){arr[i]._id="Wednesday"}
        else if(arr[i]._id===4){arr[i]._id="Thursday"}
        else if(arr[i]._id===5){arr[i]._id="Friday"}
        else if(arr[i]._id===6){arr[i]._id="Saturday"}
        else if(arr[i]._id===7){arr[i]._id="Sunday"}
        else{arr[i]._id="Monday"}
    }
    return arr
}
export default setDayName