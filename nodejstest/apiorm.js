import express from 'express';
import cors from 'cors';

const PORT =  process.env.PORT || 7011;

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

// import dataaccess

import DataAccess from './dataaccess/dataaccess.js';

let ds = new DataAccess();
// lets create REST API for Employees Table
// instance.get('/api/employees', ds.getData);
// instance.get('/api/employees/:id', ds.getDataById);
// instance.post('/api/employees', ds.postData);
// instance.put('/api/employees/:id', ds.putData);
// instance.delete('/api/employees/:id', ds.deleteData);

// lets create REST API for Departments Table
//instance.get('/api/departments', ds.getDepartmentData);
 instance.get('/api/departments/:id', ds.getDepartmentDataById);
 //instance.post('/api/departments', ds.postDepartmentData);
 instance.put('/api/departments/:id', ds.putDepartmentData);
 instance.delete('/api/departments/:id', ds.deleteDepartmentData);


// // lets create REST API for UserTable
// instance.get('/api/users', ds.getUserData);
// instance.get('/api/users/:id', ds.getUserDataById);
// instance.post('/api/users', ds.postUserData);
// instance.put('/api/users/:id', ds.putUserData);
// instance.delete('/api/users/:id', ds.deleteUserData);

// //let's create search rest api
// instance.get('/api/search/:key',ds.SearchByEmpNameAndDeptName);

// //3. create post 
// instance.post('/api/postDeptEmployeeData',ds.postDeptEmployeeData);

// //assignment 05 may login api for practice
// instance.post('/api/loginuser',ds.loginUser);
// start listening
instance.listen(PORT, ()=>{
    console.log(`Started on port ${PORT}`);
});

export default instance;