exports.FunGet=async(db,value)=>{
    //value=JSON.parse(value); 
    console.log("inside the put function",value.pid)
    let p={
        TableName:"Product",
        Key:{
            "productId":parseInt(value.pid), 
            "productName":value.pname
        }
    };
    try{
        let data=await db.get(p).promise()
        return {
            "statusCode":200,
            "body":JSON.stringify({"data":data["Item"]})
        }

    }
    catch(err){
        return {
            "statusCode":400,
            "body":JSON.stringify(err)
        }
    }
}