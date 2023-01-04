import { render, screen } from "@testing-library/react";
import FirstApp from "../src/componets/FirstApp";
describe("Prueba en <>FirstApp</>", () => {
  const title = "hola soy goku";
  const subtitle = "hola soy un subtitulo";
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostar el mensaje "hola soy goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe mostrar el tittulo en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe de mostgar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect(screen.getAllByText(subtitle).length).toBe(1);
  });
});
