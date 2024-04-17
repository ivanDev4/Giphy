import { getGifs } from "../../src/helpers/getGifs";

const fetch = require('node-fetch');

describe("pruebas en getGifs", () => {
    test("debe retornar un arreglo de Gifs", async () => {
        const gifs = await getGifs("One punch");
        console.log(gifs);
    })
})