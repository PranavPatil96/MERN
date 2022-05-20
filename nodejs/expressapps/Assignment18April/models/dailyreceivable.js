import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dailyreceivable extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    dailyreceivableid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'bill',
        key: 'billid'
      }
    },
    customerid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'customerid'
      }
    }
  }, {
    sequelize,
    tableName: 'dailyreceivable',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dailyreceivable_pkey",
        unique: true,
        fields: [
          { name: "dailyreceivableid" },
        ]
      },
    ]
  });
  }
}
