import AWS from 'aws-sdk';
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
// The Object that will consume the message from the queue 
import {Consumer} from 'sqs-consumer'; 

 
AWS.config.update({
    secretAccessKey: '',
    accessKeyId:'',
    region:'ap-south-1',
    endpoint: 'https://dynamodb.ap-south-1.amazonaws.com'
})

const qurl = 'https://sqs.ap-south-1.amazonaws.com/048407311490/dataq';

// create an instance of SQS
const sqs = new AWS.SQS({apiVersion:'2012-11-05'});
let docClient = new AWS.DynamoDB.DocumentClient();

const saveIntoProcessOrderDb = (data) =>{
    var params = {
        TableName: "ProcessOrder",
        Item: JSON.parse(data)
    };
        //Object.entries(order).map((ord)=>{
            docClient.put(params,function(error,data){
                if(error){
                    console.log(`Error in Writing data in table ${error.message}`);
                    return
                }
                console.log(`Data is Added into the Table  Successfully ${data.ConsumedCapacity}`);
            })
}
// create a consumer object for the queue

const consumer  = Consumer.create({
    queueUrl:qurl,
    sqs:sqs, // subscribe to SQS to read message from
    batchSize: 10, // number of message can be read in one batch
    // implicitly subscribe to 'message_received' event
    handleMessage: async(message)=>{
        // read and process message e.g. saving in database
        console.log('====================================');
        console.log(`Received Message = ${JSON.stringify(message)}`);
        console.log("Here = "+message.Body);
        var data = message.Body
        console.log(`Here3 = ${data}`);
        //console.log("Here2 = "+JSON.parse(JSON.parse(message).Body));
        console.log('====================================');
        saveIntoProcessOrderDb(data);
    }
    
}); 

// Make sure that the Consumer is subscribing to events so that if it crash
// then the application crash can be handled

consumer.on('error',(error)=>{
 console.log('====================================');
 console.log(`Error Occurred while Consumer to talk to Queue ${error.message}`);
 console.log('====================================');
});

consumer.on('processing_error',(error)=>{
    console.log('====================================');
    console.log(`Error Occurred in Consumer while processing message from Queue ${error.message}`);
    console.log('====================================');
   });

// start the consumer, this will be in background
consumer.start();

instance.get('/api/processorder',(req,resp)=>{
    docClient.scan({
        TableName:'ProcessOrder'
    },(error,data)=>{
        if(error){
            console.log(`Error in Writing data in table Creation ${error.message}`);
            return
        }
        console.log(`Data is Added into the Table  Successfully ${JSON.stringify(data.Items)}`);
    });
})

instance.listen(5007, ()=>{
    console.log('receiver is working on 5007');
});