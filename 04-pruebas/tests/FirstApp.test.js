import { render } from "@testing-library/react";
import FirstApp from "../src/componets/FirstApp";
describe("Prueba en <>FirstApp</>", () => {
  test("debe haer un snapshot ", () => {
    const title = "hola soy nicolas";
    //render(<FirstApp />);
    //const { container } = render(<FirstApp title={title} />);
    //expect(container).toMatchSnapshot();
  });

  test("debe mostrar el titulo en el h1", () => {
    const title = "hola soy goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("debe mostar el subtitulo por props", () => {
    const title = "hola soy goku";
    const subtitle = "hola soy un subtitulo";
    const { getByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getByText(subtitle)).toBeTruthy();
  });
});
