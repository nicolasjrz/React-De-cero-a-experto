import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("prueba promesas 09", () => {
  test("getHeroeByIdAsync debe retornar un heroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      //console.log(hero);

      expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });

      done();
    });
  });
});

describe("first", () => {
  test("getHeroeByIdAsync debe retornar un errror si el heroe no exixste", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((error) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
