import AWS from 'aws-sdk';

AWS.config.update({
    secretAccessKey: '',
    accessKeyId:'',
    region:'ap-south-1',
    endpoint: 'https://dynamodb.ap-south-1.amazonaws.com'
});

let dynamodb = new AWS.DynamoDB();

const createTable = () => {
    dynamodb.createTable({
        TableName:'Employee',
        KeySchema:[
            {
                AttributeName:"DeptName",
                "KeyType":"HASH"
            },{
                AttributeName:"EmpNo",
                "KeyType":"RANGE"
            }
        ],
        // Attributes with its DataType
        AttributeDefinitions:[
            {
                AttributeName:"DeptName",
                AttributeType:"S"
            },
            {
                AttributeName:"EmpNo",
                AttributeType:"S"
            }
        ],
        ProvisionedThroughput:{
            ReadCapacityUnits:5,
            WriteCapacityUnits:5
        }
    },(error,data)=>{
        if(error){
            console.log(`Error in Table Creation ${error.message}`);
            return
        }
        console.log(`Table Created Successfully ${data.TableDescription}`);
    });
}
createTable();