const express=require("express")
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello World");
})



app.post("/add",(req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    

    if(num1<-1000000 || num2<-1000000 ||num1>1000000 || num2>1000000){
        return  res.status(400).json({
            "status":"error",
            "message":"underflow"
        });
    }

    let sum=num1+num2;
    if(sum<-1000000 || sum>1000000){
        return  res.status(400).json({
            "status":"error",
            "message":"overflow"
        });
    }
    res.status(200).json({
        "status":"success",
        "message":"sum of two numbers is :" + sum
    });
})





app.post("/substract",(req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
   
    if(num1<-1000000 || num2<-1000000 ||num1>1000000 || num2>1000000){
        return  res.status(400).json({
            "status":"error",
            "message":"underflow"
        });
    }

    let sub=num1-num2;
    if(sub<-1000000 || sub>1000000){
        return  res.status(400).json({
            "status":"error",
            "message":"overflow"
        });
    }

    res.status(200).json({
        "status":"success",
        "message":"Substract of two numbers is :" + sub
    });
})







app.post("/multiply",(req,res)=>{

    let num1=req.body.num1;
    let num2=req.body.num2;

   
    if(num1<-1000000 || num2<-1000000 ||num1>1000000 || num2>1000000){
        return  res.status(400).json({
            "status":"error",
            "message":"underflow"
        });
    }

    let mul=num1*num2; 
    if(mul<-1000000 || mul>1000000){
        return  res.status(400).json({
            "status":"error",
            "message":"overflow"
        });
    }

    res.status(200).json({
        "status":"success",
        "message":"Multiplication of two numbers is :" + mul
    });
})







app.post("/divide",(req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
   
    if(num2==0 ||num1>1000000 || num2>1000000 || num1<-1000000 || num2<-1000000){
      return  res.status(400).json({
            "status":"error",
            "message":"Cannot divide by zero"
        });
    }

    let div=num1/num2;
    if(div<-1000000 || div>1000000){
        return  res.status(400).json({
            "status":"error",
            "message":"overflow"
        });
    }
    res.status(200).json({
        "status":"success",
        "message":"Division of two numbers is :" + div
    });
})






const PORT=4010;
app.listen(PORT,()=>{
    console.log("Server is Running on port "+ PORT )
})