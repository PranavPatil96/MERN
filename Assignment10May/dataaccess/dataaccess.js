//1. Import dependencies
import { Sequelize } from "sequelize";
import pkg from "sequelize";
const { DataTypes } = pkg;

//2. Database Mapping metadata
//2.a Model Mapping
import department from "./../models2/department.js";
import employee from "./../models2/employee.js";
import users from "./../models2/users.js";

//2. b sequelize connection
const sequelize = new Sequelize("enterprize", "humaadmin", "P@ssw0rd_", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

//2. c Authentication
sequelize.authenticate().then(
  (authenticate) => {
    console.log(`Connected to DB successfully... ${authenticate}`);
  },
  (error) => {
    console.log(`failed.... ${error}`);
  }
);

//3. Data Access class
class DataAccess {
  constructor() {
    department.init(sequelize, DataTypes);
    employee.init(sequelize, DataTypes);
    users.init(sequelize, DataTypes);
  }
  async getData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read all records
    let records = await employee.findAll({order:sequelize.literal('empno ASC')});
    // 3. send response
    if (records) {
      return resp
        .status(200)
        .send({ message: "Data is read successfully", data: records });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while reading data" });
  }
  async getDataById(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read record by id
    let id = parseInt(req.params.id);
    let record = await employee.findOne({ where: { empno: id } });
    // 3. send response
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is read successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while reading data" });
  }
  async postData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read body
    let emp = req.body;
    // 3. add new record
    let record = await employee.create(emp);
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is added successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while adding data" });
  }
  async putData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read body
    let emp = req.body;
    // 3. read request parameter
    let id = parseInt(req.params.id);
    // 4. update record
    let record = await employee.update(
      {
        empno: emp.empno,
        empname: emp.empname,
        designation: emp.designation,
        salary: emp.salary,
        deptno: emp.deptno,
      },
      { where: { empno: id } }
    );
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is upadated successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while updating data" });
  }
  async deleteData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read record by id
    let id = parseInt(req.params.id);
    let record = await employee.destroy({ where: { empno: id } });
    // 3. send response
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is deleted successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while deleting data" });
  }
  //FOR USERS TABLE
  async getUserData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read all records
    let records = await users.findAll();
    // 3. send response
    if (records) {
      return resp
        .status(200)
        .send({ message: "Data is read successfully", data: records });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while reading data" });
  }
  async getUserDataById(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read record by id
    let id = req.params.id;
    let record = await users.findOne({ where: { username: id } });
    // 3. send response
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is read successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while reading data" });
  }
  async postUserData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read body
    let user = req.body;
    // 3. add new record
    let record = await users.create(user);
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is added successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while adding data" });
  }
  async putUserData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read body
    let user = req.body;
    // 3. read request parameter
    let id = req.params.id;
    // 4. update record
    let record = await users.update(
      {
        username: user.username,
        password: user.password,
      },
      { where: { username: id } }
    );
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is upadated successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while updating data" });
  }
  async deleteUserData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read record by id
    let id = req.params.id;
    let record = await users.destroy({ where: { username: id } });
    // 3. send response
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is deleted successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while deleting data" });
  }

  //SEARCH QUERY
  //EmpName='Mahesh' || DeptName = 'IT' (OR Condition)
  //Return all EmpName as 'Mahesh' along with all Employees from IT DeptName
  async SearchByEmpNameAndDeptName(req, resp) {
    await sequelize.sync({ force: false });

    let records = await employee.findAll({
      "$or":[
        {empname:{$regex:req.params.key}},
        {designation:{$regex:req.params.key}},
        {deptno:{$regex:req.params.key}}
      ]
    });
    if (records) {
      return resp
        .status(200)
        .send({ message: "Data is read successfully", data: records });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while reading data" });
  }

  //Create an API that will have POST method to post 'Single Department' and 'Multiple Employees' for that department using single POST request
  async postDeptEmployeeData(req, resp) {
    await sequelize.sync({ force: false });
        // 2. read body
        let record;
        let { emp } = req.body;
        console.log('emp ', emp);
        for await (const e of emp) {
            console.log("e", e);
            record = await employee.create(e);
        }
        console.log("empppp", record);
        let dept = req.body.dept;    

        let record1 = await department.create(dept);  

        if (record1 && record) {
            return resp.status(200).send({ message: 'Data is added successfully', data: record1, emp });
           }
        return resp.status(500).send({ message: 'Error Occured while adding data' });
  }
  //ALL-DEPARTMEMT REST API STARTS HERE
  async getDepartmentData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read all records
    let records = await department.findAll({order:sequelize.literal('deptno ASC')});
    // 3. send response
    if (records) {
      return resp
        .status(200)
        .send({ message: "Data is read successfully", data: records });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while reading data" });
  }
  async getDepartmentDataById(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read record by id
    let id = parseInt(req.params.id);
    let record = await department.findOne({ where: { deptno: id } });
    // 3. send response
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is read successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while reading data" });
  }
  async postDepartmentData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read body
    let dept = req.body;
    // 3. add new record
    let record = await department.create(dept);
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is added successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while adding data" });
  }
  async putDepartmentData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read body
    let dept = req.body;
    // 3. read request parameter
    let id = parseInt(req.params.id);
    // 4. update record
    let record = await department.update(
      {
        deptno: dept.deptno,
        deptname: dept.deptname,
        location: dept.location,
        capacity: dept.capacity,
      },
      { where: { deptno: id } }
    );
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is upadated successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while updating data" });
  }
  async deleteDepartmentData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. read record by id
    let id = parseInt(req.params.id);
    let record = await department.destroy({ where: { deptno: id } });
    // 3. send response
    if (record) {
      return resp
        .status(200)
        .send({ message: "Data is deleted successfully", data: record });
    }
    return resp
      .status(500)
      .send({ message: "Error Occured while deleting data" });
  }
  async loginUser(req,res){
      let uname = req.body.username;
      let pass = req.body.password;
      if(uname==="Huma" && pass==="Pass@123"){
        return res
        .status(200)
        .send({message:"User is successfully auhtenticated",data:uname});
      }
      return res
      .status(500)
      .send({ message: "Error Occured while authentication" });
  }
}
export default DataAccess;
