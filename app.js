let container = document.getElementById("container");
let diceArray = [];
let rollBtn = document.getElementById("rollBtn")

class Die {
    constructor(value, x, y) {
        this.value = value;
        this.div = document.createElement('div');
        this.div.classList.add('new-die');
        this.roll();
        this.div.innerText = this.value;
        diceArray.push(this)
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.border = "black, solid, 2px";
        container.appendChild(this.div);

        this.div.addEventListener('click', () => {
            this.roll();
        });
        this.div.addEventListener('dblclick', () => {
            this.deleteDie();
        });
    }
    roll() {
        let rollValue = randomVal(1, 7);
        this.value = rollValue;
        this.div.innerText = this.value;
        //this.div.appendChild(document.createTextNode(`${rollValue}`));
    }
    deleteDie() {
        this.div.remove();
    }
}
let diebtn = document.getElementById("dieBtn");
rollBtn.addEventListener('click', () => {
    diceArray.forEach(die => {
        die.roll()
    });
});

diebtn.addEventListener('click', createDie);

function createDie() {
    let xVal = 25;
    let yVal = 25;
    let dieValue = randomVal(1, 7);
    let die = new Die(dieValue, xVal, yVal);
    diceArray.push(die);
}
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}