import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba de api key", () => {
  test("getImagen debe retornar el url ", async () => {
    const url = await getImagen();
    console.log(url);
    expect(url).toBe(undefined);
  });
});
