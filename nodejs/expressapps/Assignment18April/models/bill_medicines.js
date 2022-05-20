import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class bill_medicines extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
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
    medicineid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'medicine',
        key: 'medicineid'
      }
    }
  }, {
    sequelize,
    tableName: 'bill_medicines',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bill_medicines_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
