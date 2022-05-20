import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _roles from  "./roles.js";
import _usersinrole from  "./usersinrole.js";

export default function initModels(sequelize) {
  const roles = _roles.init(sequelize, DataTypes);
  const usersinrole = _usersinrole.init(sequelize, DataTypes);

  usersinrole.belongsTo(roles, { as: "rolename_role", foreignKey: "rolename"});
  roles.hasMany(usersinrole, { as: "usersinroles", foreignKey: "rolename"});
  usersinrole.belongsTo(users, { as: "username_user", foreignKey: "username"});
  users.hasMany(usersinrole, { as: "usersinroles", foreignKey: "username"});

  return {
    roles,
    usersinrole,
  };
}
