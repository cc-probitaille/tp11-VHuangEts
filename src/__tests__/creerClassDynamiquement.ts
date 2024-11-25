import { creerClassDynamiquement } from "./creerClassDynamiquement";

beforeEach(() => {
    process.env.MY_CLASS_NAME = "TestClass";
});

afterEach(() => {
    jest.resetModules();
});

describe("creerClassDynamiquement", () => {
    test("doit creer une classe dynamiquement", () => {
        const ClassDynamique = creerClassDynamiquement();

        expect(ClassDynamique.nomDeClass).toBe("TestClass");

        const instance = new ClassDynamique();
        expect(instance).toBeInstanceOf(ClassDynamique);

    });

    test("doit envoyer un erreur si MY_CLASS_NAME n'est pas defini", () => {
        process.env.MY_CLASS_NAME = "";

        expect(() => creerClassDynamiquement()).toThrowError("MY_CLASS_NAME environnement variable n'est pas defini");
    });

});