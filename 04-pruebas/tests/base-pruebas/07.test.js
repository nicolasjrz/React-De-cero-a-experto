import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("prueba 07", () => {
  test("debe retornar un string y un numero", () => {
    const [letters, number] = retornaArreglo();

    expect(letters).toEqual(expect.any(String));

    expect(number).toEqual(expect.any(Number));
  });
});
