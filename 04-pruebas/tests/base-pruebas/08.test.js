import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("test 08 ", () => {
  test("getHeroeById debe retornar el id del heroe ", () => {
    const id = 1;

    const hero = getHeroeById(id);

    console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
});

describe("test 08 bis ", () => {
  test("getHeroesByOwner debe retornar un arreglo de heroes", () => {
    const company = "Marvel";

    const Owners = getHeroesByOwner(company);

    console.log(Owners);

    expect(Owners).toHaveLength(2);
    expect(Owners.length).toBe(2);
    expect(Owners).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
