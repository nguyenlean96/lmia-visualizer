"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConnection = exports.sqliteConnection = void 0;
const sqlitedb_1 = __importDefault(require("./sqlitedb"));
exports.sqliteConnection = sqlitedb_1.default;
const postgresdb_1 = __importDefault(require("./postgresdb"));
exports.postgresConnection = postgresdb_1.default;
//# sourceMappingURL=index.js.map