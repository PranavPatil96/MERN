import AWS from 'aws-sdk';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
const instance = express();

instance.use(express.json());
// configure CORS
instance.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
})); 
AWS.config.update({
    secretAccessKey: '',
    accessKeyId:'',
    region:'ap-south-1',
    endpoint: 'https://dynamodb.ap-south-1.amazonaws.com'
});
let docClient = new AWS.DynamoDB.DocumentClient();
instance.get('/api/employees',(req,resp)=>{
    docClient.scan({
        TableName:'Employee'
    },(error,data)=>{
        if(error){
            console.log(`Error in Writing data in table Creation ${error.message}`);
            return
        }
        resp.send(data.Items).status(200);
        //console.log(`Data is Added into the Table  Successfully ${JSON.stringify(data.Items)}`);
    });    
});

instance.post('/api/employee',(req,resp)=>{
    var params = {
        TableName:"Employee",
        Item:req.body
    };
    docClient.put(params,function(error,data){
        if(error){
            console.log(`Error in Writing data in table ${error.message}`);
            return
        }
        resp.send("Pushed").status(200);
        //console.log(`Data is Added into the Table  Successfully ${data.ConsumedCapacity}`);
    })
});

instance.put('/api/employee/:empno/:DeptName',(req,resp)=>{
    const dname = req.params.DeptName;
    const n = req.body.Grade;
    const e = req.params.empno;
         const params = {
           TableName: "Employee",
           Key: {
             DeptName: dname,
             EmpNo:e,	
           },
           UpdateExpression: "set Grade = :Grade",
           ExpressionAttributeValues:{
             ":Grade":n
         },
           ReturnConsumedCapacity: "TOTAL",
         }
     docClient.update(params,function(error,data){
         if(error){
             console.log(`Error in Writing data in table ${error.message}`);
             return
         }
         resp.send("Updated").status(200);
       //  console.log(`Data is Updated into the Table  Successfully ${data.ConsumedCapacity}`);
     })
  })

  instance.delete('/api/employee/:empno/:DeptName',(req,resp)=>{
    const dname = req.params.DeptName
    const n = req.body.Grade;
    const e = req.params.empno;
         const params = {
           TableName: "Employee",
           Key: {
             DeptName: dname,
             EmpNo:e,	
           },
         }
     docClient.delete(params,function(error,data){
         if(error){
             console.log(`Error in Writing data in table ${error.message}`);
             return
         }
         resp.send("Deleted").status(200);
        // console.log(`Data is deleted from the Table  Successfully ${data.ConsumedCapacity}`);
     })
  })

instance.listen(5006, ()=>{
    console.log('sender is working on 5006');
});