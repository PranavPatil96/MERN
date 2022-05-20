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

import DataAccess from './dataaccess/dataaccess.js'

let ds = new DataAccess();
// lets create REST API
instance.post('/api/register', ds.registerUser);
//EMPLOYEEES REST API
instance.post('/api/employees', ds.postData);
instance.get('/api/employees', ds.getEmployeesData);
instance.get('/api/employees/:id', ds.getDataById);
instance.put('/api/employees/:id', ds.putData);
instance.delete('/api/employees/:id', ds.deleteData);
//DEPARTMENT REST API
instance.post('/api/departments', ds.postDepartmentData);
instance.get('/api/departments', ds.getData);
// instance.get('/api/departments/:id', ds.getDepartmentDataById);
instance.put('/api/departments/:id', ds.putDepartmentData);
instance.delete('/api/departments/:id', ds.deleteDepartmentData);

// start listening
instance.listen(PORT, ()=>{
    console.log(`Started on port ${PORT}`);
});