import fs from 'fs'

export function writePng(file, canvas){
    const fb = fs.openSync(file, "w");
    const buff = canvas.toBuffer("image/png");
    fs.writeSync(fb, buff, 0, buff.byteLength, 0)
}