const board = document.querySelector("div.board");
const row = board.querySelectorAll("div.row");

let r = 0;
let c = 0;

board.addEventListener("click", getRC);

function getRC(e){
    let n = parseInt(e.target.id, 10);
    //reset(n);
    r = Math.floor( (n-1) / 8 ) + 1;
    c = ( (n-1) % 8 ) + 1;
    console.log(r,c);
    horizontal(r);
    vertical(c);
}

function paintRed(row,col){
    let num = (8 * (row-1)) + col;
    let nid = document.getElementById(num);
    nid.style.backgroundColor="red";
}

function horizontal(row){
    for(var i = 1; i<= 8 ; i++){
        paintRed(row,i);
    }
}

function vertical(col){
    for(var i = 1; i<= 8 ; i++){
        console.log(i,col);
        paintRed(i,col);
    }
}