"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../modules/index"));
it('Desve ser capaz de validar se um cpf é válido', async () => {
    const cpf = '08011691600';
    const validacao = index_1.default(cpf);
    expect(validacao).toEqual(true);
});
it('Desve ser capaz de validar se um cpf com caracter especiais', async () => {
    const cpf = '080.116.916-00';
    const validacao = index_1.default(cpf);
    expect(validacao).toEqual(true);
});
