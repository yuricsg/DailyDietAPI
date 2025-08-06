"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const database_js_1 = require("./database.js");
const app = (0, fastify_1.default)();
app.get('/run', async () => {
    const tables = await (0, database_js_1.db)('sqlite_schema').select('*');
    return tables;
});
app.listen({
    port: 3333,
}).then(() => {
    console.log('Server rodando...');
});
//# sourceMappingURL=server.js.map