import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class doctor extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    doctorid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctorname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    doctorstype: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    doctoremail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    customerid: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'customerid'
      }
    }
  }, {
    sequelize,
    tableName: 'doctor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "doctor_pkey",
        unique: true,
        fields: [
          { name: "doctorid" },
        ]
      },
    ]
  });
  }
}
