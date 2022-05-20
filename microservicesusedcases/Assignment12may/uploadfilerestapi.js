import multer from "multer";
import express from 'express';
import bodyParser from "body-parser";
import AWS from 'aws-sdk';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
//import uuid from 'uuid';
//import multerS3 from "multerS3";
const instance = express();
const PORT =  process.env.PORT || 7014;
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey:''
});

// configure CORS
instance.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
})); 
// 2. Lets read the server path
let __serverPath = fileURLToPath(import.meta.url);


const storage = multer.memoryStorage({
    destination:function(req,file,cb){
        cb(null,'')
    }
});
let upload = multer({storage:storage}).single('avatar');
instance.post('/api/imageupload',upload,async(req,res)=>{
    let myFile = req.file.originalname;
    //const fileType = myFile[myFile.length-1] 
    console.log(req.file);
    const params = {
        Bucket: 'myimagebucket1',
        Key:`${myFile}`,
        Body:req.file.buffer
    }
    s3.upload(params, (error,data)=>{
        if(error){
         console.log(`Error Occurred while uploading file to bucket`);
         return;
        }
        
        console.log(`File is uploaded successfully in bucket ${data.Bucket}`);
        
    })
})



//uploadFileInBucket(file);
instance.listen(PORT, ()=>{
    console.log(`Started on port ${PORT}`);
});