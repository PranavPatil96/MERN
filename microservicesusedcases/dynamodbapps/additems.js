import AWS from 'aws-sdk';
import fs from 'fs';
AWS.config.update({
    secretAccessKey: '',
    accessKeyId:'',
    region:'ap-south-1',
    endpoint: 'https://dynamodb.ap-south-1.amazonaws.com'
});

let docClient = new AWS.DynamoDB.DocumentClient();

// Read the json files 
let fileData = fs.readFileSync('./employee.json');

// put the json data into array

let employees = JSON.parse(fileData.toString());

//Iterate over the array and put data in the table
employees.forEach((emp)=>{
    docClient.put({
        TableName:"Employee",
        Item:emp
    },(error,data)=>{
        if(error){
            console.log(`Error in Writing data in table ${error.message}`);
            return
        }
        console.log(`Data is Added into the Table  Successfully ${data.ConsumedCapacity}`);
    })
});