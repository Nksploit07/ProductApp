exports.FunDelete=async(db,value)=>{
    value=JSON.parse(value);
    console.log("inside the put function",value.pid)
    let p={
        TableName:"Product",
        Key:{
            "productId":value.pid,
            "productName":value.pname
        }
    };
    try{
        let data=await db.delete(p).promise()
        return {
            "statusCode":200,
            "body":JSON.stringify({"data":value})  
        }

    }
    catch(err){
        return {
            "statusCode":400,
            "body":JSON.stringify(err)
        }
    }

}