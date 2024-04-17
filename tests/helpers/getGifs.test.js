import { getGifs } from "../../src/helpers/getGifs";

describe("pruebas en getGifs", () => {
    test("debe retornar un arreglo de Gifs", async () => {
        const gifs = await getGifs("One punch");
        expect(gifs.length > 1).toBe(true);
    })
})