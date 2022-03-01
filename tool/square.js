export default function write(ctx, color, width, height, x=0, y=0){
    console.log("Square added: " + color + " " + width + " by " + height)
    ctx.strokeStyle = 'rgba(255,255,255,1)'
    ctx.beginPath()
    ctx.lineTo(x, y)
    ctx.lineTo(x + width, y)
    ctx.lineTo(x + width, y+height)
    ctx.lineTo(x, y + height)
    ctx.lineTo(x, y)
    ctx.stroke()
}