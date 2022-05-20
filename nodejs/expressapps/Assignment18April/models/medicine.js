import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class medicine extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    medicineid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    medicinecategory: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    medicinename: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    medicinedescription: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    medicineprice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stocks: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'medicine',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "medicine_pkey",
        unique: true,
        fields: [
          { name: "medicineid" },
        ]
      },
    ]
  });
  }
}
