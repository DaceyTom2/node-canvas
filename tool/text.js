export default function write(ctx, text, color, fontSize, x, y, font="Comic Sans"){
    console.log("Text added: " + color + " \"" + text + "\" at " + x + "x " + y + "y")
    ctx.font = fontSize + 'px "' + font + '"'
    ctx.fillStyle = color
    ctx.fillText(text, x, y)
}