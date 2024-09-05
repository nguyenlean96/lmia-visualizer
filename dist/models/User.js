"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../src/db/config");
class User extends sequelize_1.Model {
}
User.init({
    name: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING
}, {
    sequelize: config_1.sqliteConnection,
    modelName: 'User',
    tableName: 'users'
});
exports.default = User;
//# sourceMappingURL=User.js.map