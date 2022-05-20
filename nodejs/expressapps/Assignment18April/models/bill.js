import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class bill extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    billid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customerid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'customerid'
      }
    },
    prescriptionid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'prescription',
        key: 'prescriptionid'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    billdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bill',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bill_pkey",
        unique: true,
        fields: [
          { name: "billid" },
        ]
      },
    ]
  });
  }
}
