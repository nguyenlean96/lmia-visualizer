"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../src/db/config");
class PostalCode extends sequelize_1.Model {
}
PostalCode.init({
    postal_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    province_abbr: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    time_zone: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    latitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: config_1.sqliteConnection,
    modelName: 'PostalCode',
    tableName: 'PostalCodes',
    timestamps: false,
});
exports.default = PostalCode;
//# sourceMappingURL=PostalCode.js.map