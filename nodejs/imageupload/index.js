import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

import {fileURLToPath} from 'url';
const PORT =  process.env.PORT || 7014;

// create an instance
const instance = express();
// Add JSON Middleware in HTTP Pipeline
instance.use(express.json());
// do not parse incoming data other than HTTP Request Message Body
instance.use(express.urlencoded({extended:false}));
// configure CORS
instance.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*"
})); 

import DataAccess from './dataaccess/dataaccess.js';

console.log(`in indx,js file`);
let ds = new DataAccess();
// lets create REST API
instance.post('/api/imageupload', ds.imageUplaod);
// // 2. Lets read the server path
// let __serverPath = fileURLToPath(import.meta.url);

// const storage = multer.diskStorage({
//     destination: path.join(__serverPath,'./../../imageupload/uploads'),
//     filename:function(req, file, cb){
//         //null as means first arg means no errro
//         cb(null,Date.now()+ '-'+file.originalname)
//     }
// })

// instance.post('/imageupload',async (req,res)=>{
//     try {
//         //'avavtar is the name of the input file field '
//         let upload = multer({storage:storage}).single('avatar');
//         upload(req,res,function(err){
//             if(!req.file){
//                 return res.send('Please select an image to upload');
//             }else if(err instanceof multer.MulterError){
//                 return res.send(err);
//             }else if(err){
//                 return res.send(err);
//             }
//         });
//     } catch (error) {
//         console.log(error);
//     }
// });
// start listening
instance.listen(PORT, ()=>{
    console.log(`Started on port ${PORT}`);
});