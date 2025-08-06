"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.config = void 0;
const knex_1 = __importDefault(require("knex"));
exports.config = {
    client: 'sqlite3',
    connection: {
        filename: './db/app.db',
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './db/migration',
    },
};
exports.db = (0, knex_1.default)(exports.config);
//# sourceMappingURL=database.js.map