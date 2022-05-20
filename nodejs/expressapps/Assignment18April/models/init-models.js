import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _bill from  "./bill.js";
import _bill_medicines from  "./bill_medicines.js";
import _customer from  "./customer.js";
import _dailyreceivable from  "./dailyreceivable.js";
import _doctor from  "./doctor.js";
import _medicine from  "./medicine.js";
import _orders from  "./orders.js";
import _prescription from  "./prescription.js";
import _prescription_medicines from  "./prescription_medicines.js";

export default function initModels(sequelize) {
  const bill = _bill.init(sequelize, DataTypes);
  const bill_medicines = _bill_medicines.init(sequelize, DataTypes);
  const customer = _customer.init(sequelize, DataTypes);
  const dailyreceivable = _dailyreceivable.init(sequelize, DataTypes);
  const doctor = _doctor.init(sequelize, DataTypes);
  const medicine = _medicine.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const prescription = _prescription.init(sequelize, DataTypes);
  const prescription_medicines = _prescription_medicines.init(sequelize, DataTypes);

  bill_medicines.belongsTo(bill, { as: "bill", foreignKey: "billid"});
  bill.hasMany(bill_medicines, { as: "bill_medicines", foreignKey: "billid"});
  dailyreceivable.belongsTo(bill, { as: "bill", foreignKey: "billid"});
  bill.hasMany(dailyreceivable, { as: "dailyreceivables", foreignKey: "billid"});
  bill.belongsTo(customer, { as: "customer", foreignKey: "customerid"});
  customer.hasMany(bill, { as: "bills", foreignKey: "customerid"});
  dailyreceivable.belongsTo(customer, { as: "customer", foreignKey: "customerid"});
  customer.hasMany(dailyreceivable, { as: "dailyreceivables", foreignKey: "customerid"});
  doctor.belongsTo(customer, { as: "customer", foreignKey: "customerid"});
  customer.hasMany(doctor, { as: "doctors", foreignKey: "customerid"});
  prescription.belongsTo(customer, { as: "customer", foreignKey: "customerid"});
  customer.hasMany(prescription, { as: "prescriptions", foreignKey: "customerid"});
  prescription.belongsTo(doctor, { as: "doctor", foreignKey: "doctorid"});
  doctor.hasMany(prescription, { as: "prescriptions", foreignKey: "doctorid"});
  bill_medicines.belongsTo(medicine, { as: "medicine", foreignKey: "medicineid"});
  medicine.hasMany(bill_medicines, { as: "bill_medicines", foreignKey: "medicineid"});
  orders.belongsTo(medicine, { as: "medicine", foreignKey: "medicineid"});
  medicine.hasMany(orders, { as: "orders", foreignKey: "medicineid"});
  prescription_medicines.belongsTo(medicine, { as: "medicine", foreignKey: "medicineid"});
  medicine.hasMany(prescription_medicines, { as: "prescription_medicines", foreignKey: "medicineid"});
  bill.belongsTo(prescription, { as: "prescription", foreignKey: "prescriptionid"});
  prescription.hasMany(bill, { as: "bills", foreignKey: "prescriptionid"});
  prescription_medicines.belongsTo(prescription, { as: "prescription", foreignKey: "prescriptionid"});
  prescription.hasMany(prescription_medicines, { as: "prescription_medicines", foreignKey: "prescriptionid"});

  return {
    bill,
    bill_medicines,
    customer,
    dailyreceivable,
    doctor,
    medicine,
    orders,
    prescription,
    prescription_medicines,
  };
}
