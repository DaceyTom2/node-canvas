import Canvas from "canvas";
import writeText from "./tool/text.js"
import writeSquare from "./tool/square.js";
import { writePng } from "./writeCanvas.js";

const canvas = Canvas.createCanvas(200, 200);
const ctx = canvas.getContext('2d', {pixelFormat: "RGB16_565"})

writeText(ctx, "Hello World!", "white", 12, 4, 16)
writeSquare(ctx, "gray", 200, 200)
writeSquare(ctx, "blue", 50, 50, 50, 50)
writeSquare(ctx, "green", 50, 50, 75, 75)
writeSquare(ctx, "yellow", 50, 50, 100, 100)


writePng("./canvas.png", canvas)