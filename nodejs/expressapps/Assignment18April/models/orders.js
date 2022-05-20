import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class orders extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    orderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    orderstatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceno: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    medicineid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'medicine',
        key: 'medicineid'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "orderid" },
        ]
      },
    ]
  });
  }
}
