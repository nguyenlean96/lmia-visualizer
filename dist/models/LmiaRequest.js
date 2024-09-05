"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../src/db/config");
const sequelize_1 = require("sequelize");
class LmiaRequest extends sequelize_1.Model {
}
LmiaRequest.init({
    province_territory: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    program_stream: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    employer_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    employer_address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    incorporate_status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    number_of_requested_lmia: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    number_of_requested_positions: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    quarter: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: config_1.sqliteConnection,
    modelName: 'LmiaRequest',
    tableName: 'LmiaRequests',
    timestamps: false,
});
exports.default = LmiaRequest;
//# sourceMappingURL=LmiaRequest.js.map