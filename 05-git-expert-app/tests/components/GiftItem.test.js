import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/componets";

describe("Test de gift item", () => {
  const url = "http://localhost/wwww";
  const title = "titulo";
  const alt = "titulo";
  test("debe haer match con el snapshot  ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el alt indicado ", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();
    //expect(screen.getByRole("img").src).toBe(url);
    //console.log(screen.getByRole("img").src);
    //console.log("hgola");
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
