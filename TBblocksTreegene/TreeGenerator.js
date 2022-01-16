var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var SBGx = 0, SBGy = 0;//グリッドそれぞれのx,y座標
var ResetEnableFlag = false;//リセットボタンが利用可能かどうか
var G = false, H = false, I = false, J = false;
function normalblock(x, y, size, G, H, I, J) {
    let blockname = document.getElementById("blockname");
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();
    /* ctx.closePath();
    ctx.beginPath(); */
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseLine = "middle";
    ctx.fillText(blockname.value, x + size * 0.5, y + size * 0.5);
    ctx.closePath();
    if (G) {
        connectionHorizontal(x - size - 10, y, size);
    }
    if (H) {
        connectionVertical(x, y, size);
    }
    if (I) {
        connectionHorizontal(x, y, size);
    }
    if (J) {
        connectionVertical(x, y - size - 10, size);
    }
}
function connectionVertical(x, y, size) {
    ctx.beginPath();
    ctx.rect(x + size / 2 - 10, y + size, 20, 10);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}
function connectionHorizontal(x, y, size) {
    ctx.beginPath();
    ctx.rect(x + size, y + size / 2 - 10, 10, 20);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

normalblock(100, 100, 50, 1, 1, 1, 1);