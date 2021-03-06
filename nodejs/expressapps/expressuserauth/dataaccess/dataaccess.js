// 1. Import dependencies
import { Sequelize } from "sequelize";
import pkg from "sequelize";
const { DataTypes } = pkg;
// 2. Database Mapping Metadata
// 2a. Model Mapping
import department from "./../models2/department.js";
import users from "./../models2/users.js";
import employee from "./../models2/employee.js";
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
// 3. Data Access Class
class DataAccess {
  // Lets initialize the Mapping between Model class and Table using sequelize
  // generated model
  // This will establish connection to Database and resolve ES 6 DataTypes
  constructor() {
    department.init(sequelize, DataTypes);
    users.init(sequelize, DataTypes);
    employee.init(sequelize, DataTypes);
  }

  async registerUser(req, resp) {
    const user = req.body;
    await sequelize.sync({ force: false });
    // check if the user already exist
    let findUser = await users.findOne({ where: { username: user.username } });
    if (findUser !== null)
      return resp
        .status(409)
        .send({ message: `User ${user.username} is already exists` });
    // create user
    let created = await users.create(user);
    if (created !== null)
      return resp
        .status(201)
        .send({ message: `User ${user.username} is created successfully` });
  }

  async getData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. check for authentication
    let user = req.body;
    // 2a. check if the request has the authorization header
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // username:password
    // 2c. split header value
    let values = headers.split(":"); // values[0] and values[1]
    console.log(`User Name ${values[0]} and Password ${values[1]}`);
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: values[0] } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${values[0]} is not exists` });
    // 2e. check for username and password match
    if (findUser.password !== values[1].trim())
      return resp.status(401).send({ message: `Password does not match` });
    else {
      // 2. read all records
      let records = await department.findAll();
      // 3. send response
      if (records) {
        return resp
          .status(200)
          .send({ message: "Data is read successfully", data: records });
      }
      return resp
        .status(500)
        .send({ message: "Error Occurred while reading data" });
    }
  }
  async getEmployeesData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    // 2. check for authentication
    let user = req.body;
    // 2a. check if the request has the authorization header
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // username:password
    // 2c. split header value
    let values = headers.split(":"); // values[0] and values[1]
    console.log(`User Name ${values[0]} and Password ${values[1]}`);
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: values[0] } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${values[0]} is not exists` });
    // 2e. check for username and password match
    if (findUser.password !== values[1].trim())
      return resp.status(401).send({ message: `Password does not match` });
    else {
      // 2. read all records
      let records = await employee.findAll();
      // 3. send response
      if (records) {
        return resp
          .status(200)
          .send({ message: "Data is read successfully", data: records });
      }
      return resp
        .status(500)
        .send({ message: "Error Occurred while reading data" });
    }
  }
  async getDataById(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // username:password
    // 2c. split header value
    let values = headers.split(":"); // values[0] and values[1]
    console.log(`User Name ${values[0]} and Password ${values[1]}`);
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: values[0] } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${values[0]} is not exists` });
    // 2e. check for username and password match
    if (findUser.password !== values[1].trim())
      return resp.status(401).send({ message: `Password does not match` });
    else {
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
  }

  //POST DATA
  async postData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // username:password
    // 2c. split header value
    let values = headers.split(":"); // values[0] and values[1]
    console.log(`User Name ${values[0]} and Password ${values[1]}`);
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: values[0] } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${values[0]} is not exists` });
    // 2e. check for username and password match
    if (findUser.password !== values[1].trim())
      return resp.status(401).send({ message: `Password does not match` });
    else {
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
  }

  //PUT DATA
  async putData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // username:password
    // 2c. split header value
    let values = headers.split(":"); // values[0] and values[1]
    console.log(`User Name ${values[0]} and Password ${values[1]}`);
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: values[0] } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${values[0]} is not exists` });
    // 2e. check for username and password match
    if (findUser.password !== values[1].trim())
      return resp.status(401).send({ message: `Password does not match` });
    else {
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
  }
  //DELETE DATA
  async deleteData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // username:password
    // 2c. split header value
    let values = headers.split(":"); // values[0] and values[1]
    console.log(`User Name ${values[0]} and Password ${values[1]}`);
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: values[0] } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${values[0]} is not exists` });
    // 2e. check for username and password match
    if (findUser.password !== values[1].trim())
      return resp.status(401).send({ message: `Password does not match` });
    else {
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
  }


  //DEPARTMENT CRUD REST API : 1. POST DATA
  //POST DATA
  async postDepartmentData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // username:password
    // 2c. split header value
    let values = headers.split(":"); // values[0] and values[1]
    console.log(`User Name ${values[0]} and Password ${values[1]}`);
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: values[0] } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${values[0]} is not exists` });
    // 2e. check for username and password match
    if (findUser.password !== values[1].trim())
      return resp.status(401).send({ message: `Password does not match` });
    else {
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
  }

  //PUT DEPARTMENT DATA
  async putDepartmentData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // username:password
    // 2c. split header value
    let values = headers.split(":"); // values[0] and values[1]
    console.log(`User Name ${values[0]} and Password ${values[1]}`);
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: values[0] } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${values[0]} is not exists` });
    // 2e. check for username and password match
    if (findUser.password !== values[1].trim())
      return resp.status(401).send({ message: `Password does not match` });
    else {
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
  }

  //DELETE DEPT DATA
  async deleteDepartmentData(req, resp) {
    // 1. Synchronize with DB using sequelize object
    // do not overwrite DB
    await sequelize.sync({ force: false });
    if (!req.headers.authorization) {
      return resp
        .status(400)
        .send({ message: "Request is missing the headers info" });
    }

    // 2b. Read the Headers data

    let headers = req.headers.authorization; // username:password
    // 2c. split header value
    let values = headers.split(":"); // values[0] and values[1]
    console.log(`User Name ${values[0]} and Password ${values[1]}`);
    // 2d. check if the user exist
    let findUser = await users.findOne({ where: { username: values[0] } });
    if (findUser === null)
      return resp
        .status(404)
        .send({ message: `User ${values[0]} is not exists` });
    // 2e. check for username and password match
    if (findUser.password !== values[1].trim())
      return resp.status(401).send({ message: `Password does not match` });
    else {
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
  }
}

export default DataAccess;
