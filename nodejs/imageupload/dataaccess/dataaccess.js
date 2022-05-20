// 1. Import dependencies
import { Sequelize } from "sequelize";
import pkg from "sequelize";
import multer from 'multer';
import path from 'path';

import {fileURLToPath} from 'url';
const { DataTypes } = pkg;
// 2. Database Mapping Metadata
// 2a. Model Mapping

import users from './../models2/users.js'
// 2b. Sequelize Connection
const sequelize = new Sequelize("enterprize", "humaadmin", "P@ssw0rd_", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
// 2c. Authentication (async)
sequelize.authenticate().then(
  (authenticate) => {
    console.log(`Connected to DB Successfully.... ${authenticate}`);
  },
  (error) => {
    console.log(`failed....${error}`);
  }
);
  // 2. Lets read the server path
  let __serverPath = fileURLToPath(import.meta.url);
  
const storage = multer.diskStorage({
    destination: path.join(__serverPath,'./../../imageupload/uploads'),
    filename:function(req, file, cb){
        //null as means first arg means no errro
        cb(null,Date.now()+ '-'+file.originalname)
    }
})
// 3. Data Access Class
class DataAccess {
  // Lets initialize the Mapping between Model class and Table using sequelize
  // generated model
  // This will establish connection to Database and resolve ES 6 DataTypes
  constructor() {
   
    users.init(sequelize, DataTypes);
   
  }



async imageUplaod (req,res){
    const user = req.file;
    //console.log(`use ${req.file.filename}`);
    await sequelize.sync({ force: false });
        //'avatar is the name of the input file field '
        let upload = multer({storage:storage}).single('avatar');
        upload(req,res,function(err){
            if(!req.file){
                return res.send('Please select an image to upload');
            }else if(err instanceof multer.MulterError){
                return res.send(err);
            }else if(err){
                return res.send(err);
            }
        });
      //  let created = await users.create(user);
      //   if (created !== null)
      // return res
      //   .status(201)
      //   .json({success:1})
      //   .send({ message: `User ${user.image} is created successfully` });
    }
};
//   async registerUser(req, resp) {
//     const user = req.body;
//     await sequelize.sync({ force: false });
//     // check if the user already exist
//     // let findUser = await users.findOne({ where: { username: user.username } });
//     // if (findUser !== null)
//     //   return resp
//     //     .status(409)
//     //     .send({ message: `User ${user.username} is already exists` });
//     // create user
//     let created = await users.create(user);
//     if (created !== null)
//       return resp
//         .status(201)
//         .send({ message: `User ${user.username} is created successfully` });
//   }
 
//}

export default DataAccess;
