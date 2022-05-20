import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class customer extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    customerid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customername: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    customeremail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    customerphone: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_pkey",
        unique: true,
        fields: [
          { name: "customerid" },
        ]
      },
    ]
  });
  }
}
