import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/componets";
import { useFetchGifs } from "./../../src/hooks/useFetchGifs";
jest.mock("./../../src/hooks/useFetchGifs");
describe("pruebas en gifgrid", () => {
  const category = "one punch";
  test("debe de mostar que el loading iniciaomente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("cargando...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("debe de mostrar ites cuando se cargan las imagens usefetchfigs", () => {
    const gifs = [
      {
        id: "adc",
        title: "saitama",
        url: "www.nico.com",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(1);
  });
});
