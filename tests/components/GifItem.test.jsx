import { render, screen } from "@testing-library/react"
import React from "react"
import { GifItem } from "../../src/components/GifItem.jsx"

describe("pruebas en GifItem", () => {
    const title = "Saitama"
    const url = "https://one-punch.com/saitama.jpg"

    test("debe de hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test("debe de mostrar la imagen con el url y el alt indicado", () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole("img")
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })

    test("el titulo debe ser un string", () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
})