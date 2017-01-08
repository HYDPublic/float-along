var canvas = document.getElementById('game'),
    ctx = canvas.getContext('2d'),
    baseWidth = 546;
    baseHeight = 320;

// Scale canvas to fit
var horizScale = Math.max(Math.floor(window.innerWidth / baseWidth), .5),
    vertScale = Math.max(Math.floor(window.innerHeight / baseHeight), .5),
    canvasScale = Math.min(horizScale, vertScale);

var ctxWidth = canvasScale * baseWidth;
var ctxHeight = canvasScale * baseHeight;

canvas.width = ctxWidth;
canvas.height = ctxHeight;