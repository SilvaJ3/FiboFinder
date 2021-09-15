const previous = document.querySelector(".previous");
const actual = document.querySelector(".actual");
const next = document.querySelector(".next");
const gold = document.querySelector(".gold");

/* ---------------------------- Fonction Fibonaci --------------------------- */

let fiboArray = [];
let el1;
let el2;

for (let i = 0; i < 100; i++) {
    // Premier tour où l'array est vide
    if (i == 0) {
        el1 = 1
        fiboArray.push(el1);
        el2 = el1 + 1;
        fiboArray.push(el2);
    } 
    // Le reste des tours où le i - 1 != undefined
    else {
        el1 = fiboArray[i - 1];
        el2 = fiboArray[i] + el1;
        fiboArray.push(el2);
    }
}


/* ----------------------------- Fonction Finder ---------------------------- */

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let value = e.target.children[0].children[1].value;

    console.log(value);
    
    previous.innerText = fiboArray[value - 2];
    actual.innerText = fiboArray[value - 1];
    next.innerText = fiboArray[value];
    gold.innerText = ( fiboArray[value-1] / fiboArray[value - 2] ).toFixed(10)
})

