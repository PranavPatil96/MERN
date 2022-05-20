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
docClient.query({
    TableName:'Employee',
    KeyConditionExpression: "#dname=:dname", // where clause
    ExpressionAttributeNames:{
        "#dname":"DeptName" // The attribute from Table map with Expression
    },
    ExpressionAttributeValues:{
        ":dname": 'Architecture' // actual value to condition
    }
},(error,data)=>{
    if(error){
        console.log(`Error in Writing data in table Creation ${error.message}`);
        return
    }
    console.log(`Data is Added into the Table  Successfully ${JSON.stringify(data.Items)}`);
}); 

console.log('====================================');
console.log('Using Scan');
console.log('====================================');

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
})

instance.listen(5006, ()=>{
    console.log('sender is working on 5006');
});