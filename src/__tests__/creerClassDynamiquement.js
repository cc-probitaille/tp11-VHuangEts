"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creerClassDynamiquement_1 = require("./creerClassDynamiquement");
beforeEach(() => {
    process.env.MY_CLASS_NAME = "TestClass";
});
afterEach(() => {
    jest.resetModules();
});
describe("creerClassDynamiquement", () => {
    test("doit creer une classe dynamiquement", () => {
        const ClassDynamique = (0, creerClassDynamiquement_1.creerClassDynamiquement)();
        expect(ClassDynamique.nomDeClass).toBe("TestClass");
    });
});
