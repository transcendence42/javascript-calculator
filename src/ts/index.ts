
function showClickedButton(str: string) {
    let prompt : string = document.getElementById('total').innerHTML;
    console.log(str);
    if (prompt === "0"){
        document.getElementById('total').innerHTML = str;
    } else {
        document.getElementById('total').innerHTML = prompt + str;
    }
}

function parseInput(str: string) : {num1: number; num2: number; operator: string;} {
    let num1: number;
    let num2: number;
    let operator: string;
    return {
        num1: num1,
        num2: num2,
        operator: operator
    }
}

function calculate(num1: number, num2: number, operator: string): string {
    let ret: string;
    return ret;
}

function showResult(str: string) {

}

function clearPrompt() {
    document.getElementById('total').innerHTML = '';
}

function setEventListner() {
    const digits = document.getElementsByClassName('digits');
    digits[0].addEventListener('click', (e) => {
        console.log("haha");
        showClickedButton((<Element>e.target).innerHTML);
    });

    const operations = document.getElementsByClassName('operations');
    operations[0].addEventListener('click', (e) => {
        if ((<Element>e.target).innerHTML === "=") {
            let input; 
            input = parseInput(document.getElementById('total').innerHTML);
            showResult(calculate(input.num1, input.num2, input.operator));
            clearPrompt();        
        } else {
            showClickedButton((<Element>e.target).innerHTML);
        }
    });

    const modifier = document.getElementsByClassName('modifier');
    modifier[0].addEventListener('click', (e) => {
        clearPrompt();
        showClickedButton("0");
    });
}

function init() {
    setEventListner();
}

init();