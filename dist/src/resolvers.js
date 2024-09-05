"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const sequelize_1 = require("sequelize");
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        numberSix: () => 6,
        numberSeven: () => 7,
        postalCodes(_1, __1, _a) {
            return __awaiter(this, arguments, void 0, function* (_, __, { models }) {
                return yield models.PostalCode.findAll();
            });
        },
        postalCode(_1, _a, _b) {
            return __awaiter(this, arguments, void 0, function* (_, { postalCode }, { models }) {
                if (String(postalCode).includes(' ')) {
                    postalCode = String(postalCode).replace(/\s/g, '%');
                }
                else {
                    if (String(postalCode).length < 4) {
                        postalCode = `%${String(postalCode)}%`;
                    }
                    else if (String(postalCode).length > 3 &&
                        String(postalCode).length < 7) {
                        const firstPart = String(postalCode).slice(0, 3);
                        const secondPart = String(postalCode).slice(3);
                        postalCode = `%${firstPart}%${secondPart}%`;
                    }
                    else {
                        // Split the postal code into two parts
                        const firstPart = String(postalCode).slice(0, 3);
                        const secondPart = String(postalCode).slice(3);
                        postalCode = `${firstPart} ${secondPart}`;
                    }
                }
                return yield models.PostalCode.findAll({
                    where: {
                        postal_code: {
                            [sequelize_1.Op.like]: `%${postalCode}%`,
                        },
                    },
                });
            });
        }
    },
    Mutation: {
        register(_1, _a, _b) {
            return __awaiter(this, arguments, void 0, function* (_, { username, password }, { models }) {
                const user = yield models.User.create({
                    username,
                    password: bcryptjs_1.default.hashSync(password, 10),
                });
                return user;
            });
        },
        login(_1, _a, _b) {
            return __awaiter(this, arguments, void 0, function* (_, { username, password }, { models }) {
                const user = yield models.User.findOne({
                    where: {
                        username,
                    },
                });
                if (!user) {
                    throw new Error('User not found');
                }
                if (!bcryptjs_1.default.compareSync(password, user.password)) {
                    throw new Error('Incorrect password');
                }
                return user;
            });
        }
    }
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map