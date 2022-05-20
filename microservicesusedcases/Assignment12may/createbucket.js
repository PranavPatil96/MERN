// import AWS SDK
import AWS from 'aws-sdk';
const bucket_name = 'blaze-files-bucket';

const s3 = new AWS.S3({
    accessKeyId:'',
    secretAccessKey:''
});

//create bucket
s3.createBucket({
    Bucket:bucket_name,
    CreateBucketConfiguration:{
        LocationConstraint:'us-east-1'
    }
},
(error,data)=>{
    if(error){
        console.log(`Error occured while creating bucket ${error}`);
        return;
    }
    console.log(`Bucket is created successfullu at ${data.Location}`);
}
);
