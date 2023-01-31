import { render, screen } from "@testing-library/react";
import { UserContext } from "../../10-useContext/context/UserContext";
import { HomePage } from "../../10-useContext/HomePage";

describe("prueba en home Page", () => {
  const user = { user: "fernando", id: "1" };

  test("debe mostar el componente sin el usuario ", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe mostar el componente con el usuario ", () => {
    render(
      <UserContext.Provider value={user}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.user);
  });
});
