import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    rolename: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    permissions: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "roles_pkey",
        unique: true,
        fields: [
          { name: "rolename" },
        ]
      },
    ]
  });
  }
}
