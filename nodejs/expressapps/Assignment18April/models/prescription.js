import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class prescription extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    prescriptionid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctorid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'doctor',
        key: 'doctorid'
      }
    },
    customerid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'customerid'
      }
    },
    prescriptiondesc: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'prescription',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "prescription_pkey",
        unique: true,
        fields: [
          { name: "prescriptionid" },
        ]
      },
    ]
  });
  }
}
