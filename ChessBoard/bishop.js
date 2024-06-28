// Write your solution here
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
    mainDiag(r,c);
    counterDiag(r,c);
}

// function paintRed(n){
//     console.log(n);
//         let nid = document.getElementById(n);
//         nid.style.backgroundColor="red";
// }

function paintRed(row,col){
        let num = (8 * (row-1)) + col;
        let nid = document.getElementById(num);
        nid.style.backgroundColor="red";
}

function mainDiag(row,col){
    console.log("main");
    let startRow = row - Math.min(row, col) + 1;
    let startCol = col - Math.min(row, col) + 1;
    while (startRow <= 8 && startCol <= 8) {
        paintRed(startRow,startCol);
        console.log(startRow,startCol);
        startRow++;
        startCol++;
    }
}
function counterDiag(row, col) {
    console.log("counter");
    let startRow = row + Math.min(8 - row, col);
    let startCol = col - Math.min(8 - row, col);
    if(startCol === 0){
        startRow--;
        startCol++;
    }
    while (startRow >= 1 && startCol <= 8) {
        paintRed(startRow, startCol);
        console.log(startRow, startCol);
        startRow--;
        startCol++;
    }
}

// var divElements = document.querySelectorAll('div.checkbox');
// divElements.forEach(function(divElement) {
//     divElement.textContent = divElement.id;
// });

// function reset(){
//     for(let i = 1; i < 65 ; i++){
//         console.log(i);
//         document.getElementById(i).reset();
//     }
// }

// function mainDiag(n){
//     //let num = (8 * (row-1)) + col;
//     let temp = n+9;
//     while(temp !== n){
//         console.log(temp);
//         paintRed(temp);
//         temp = (temp + 9) % n;
//     }
// }

// function counterDiag(row, col){
//     let sum = row + col;
//     let i = 1;
//     while(sum - i > 0){
//         paintRed(i, sum-i);
//         console.log(i, sum-i);
//         i++;
//     }
// }
