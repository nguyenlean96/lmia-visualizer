"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sqliteConnection = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'sequelize.sqlite',
    logging: false,
    pool: {
        max: 5,
        idle: 10000,
    }
});
exports.default = sqliteConnection;
//# sourceMappingURL=sqlitedb.js.map