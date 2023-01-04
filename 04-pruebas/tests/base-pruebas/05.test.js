import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("pruebas", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });
});

describe("prueba nombre ", () => {
  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "nicolas";

    const getUser = getUsuarioActivo(nombre);

    const testUser = {
      uid: "ABC567",
      username: nombre,
    };
    expect(testUser).toEqual(getUser);
  });
});
