import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class usersinrole extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    username: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'users',
        key: 'username'
      }
    },
    rolename: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'roles',
        key: 'rolename'
      }
    }
  }, {
    sequelize,
    tableName: 'usersinrole',
    schema: 'public',
    timestamps: false
  });
  }
}
