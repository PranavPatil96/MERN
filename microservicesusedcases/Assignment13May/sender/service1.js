import express from 'express';
import AWS from 'aws-sdk';
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
})
// AWS.config.update({
//     secretAccessKey: 'kUF5KWRU6aYKBmw6zNY4RSGxD6pgpROIUpr1pP79',
//     accessKeyId:'AKIAQWRKM6SBLKU3A5VP',
//     region:'ap-south-1'     
// });
let docClient = new AWS.DynamoDB.DocumentClient();
const qurl = 'https://sqs.ap-south-1.amazonaws.com/048407311490/dataq';

// craete an instance of sqs
const sqs = new AWS.SQS({apiVersion:'2012-11-05'});

instance.post('/api/order',(req,resp)=>{
    console.log(`Body = ${req.body}`)
    let order = req.body;
    console.log(`is it called...${JSON.stringify(order)}`);
   // let orderJsonData = Array.from(JSON.stringify(order));
   var params = {
    TableName: "Order",
    Item: req.body
};
    //Object.entries(order).map((ord)=>{
        docClient.put(params,function(error,data){
            if(error){
                console.log(`Error in Writing data in table ${error.message}`);
                return
            }
            console.log(`Data is Added into the Table  Successfully ${data.ConsumedCapacity}`);
        })
   // });
    // lets send the message to SQS

    let qmessage = sqs.sendMessage({
        MessageAttributes:{
            "OrderId":{DataType:"String",   StringValue: order.OrderId},
            "CustomerName":{DataType:"String", StringValue: order.CustomerName},
            "Quantity":{DataType:"String", StringValue: order.Quantity},
            "ItemName":{DataType:"String", StringValue: order.ItemName},
        },
      MessageBody: JSON.stringify(order),
      QueueUrl:qurl  
    }).promise(); // Async Execution

    qmessage.then((data)=>{
        console.log(`Data is Successfully Send ${data.MessageId}`);
        resp.status(200).send({message: `Data is Successfully Send ${data.MessageId}`});
    }).catch();

});


instance.listen(5006, ()=>{
    console.log('sender is working on 5006');
});