const colors = {
    white: {
        rgba: "rgba(255,255,255,1)"
    },
    gray: {
        rgba: "rgba(128,128,128,1)"
    },
    black: {
        rgba: "rgba(0,0,0,1)"
    },
    red: {
        rgba: "rgba(255,0,0,1)"
    },
    green: {
        rgba: "rgba(0,255,0,1)"
    },
    blue: {
        rgba: "rgba(0,0,250,1)"
    },
    purple: {
        rgba: "rgba(128,0,128,1)"
    },
    yellow: {
        rgba: "rgba(255,255,0,1)"
    },
    orange: {
        rgba: "rgba(255,128,0,1)"
    },
}

export function getRGBA(colorName){
    return colors[colorName].rgba
}