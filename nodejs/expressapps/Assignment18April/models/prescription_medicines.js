import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class prescription_medicines extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prescriptionid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'prescription',
        key: 'prescriptionid'
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
    tableName: 'prescription_medicines',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "prescription_medicines_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
