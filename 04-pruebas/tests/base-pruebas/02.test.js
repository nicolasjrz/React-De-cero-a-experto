import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("pruebas 02", () => {
  test('getSaludo debe de retornar "hola nicolas"', () => {
    const name = "nicolas";
    const msj = getSaludo(name);

    expect(msj).toBe(`Hola ${name}`);
  });
});
