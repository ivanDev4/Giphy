import { render } from "@testing-library/react"
import React from "react"
import { GifItem } from "../../src/components/GifItem.jsx"

describe("pruebas en GifItem", () => {
    const title = "Saitama";
    const url = "https://one-punch.com/saitama.jpg";

    test("debe de hacer math con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    }
    )
})