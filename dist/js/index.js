import { getCountOperationdataSet, setCountOperationdataSet } from './operation-data-set.js';
import { checkValidInput } from './check.js';
const calculateOperator = (total, operator, num) => {
    let result = 0;
    if (operator === '+')
        result = total + num;
    if (operator === '/')
        result = total / num;
    if (operator === '%')
        result = total % num;
    if (operator === '-')
        result = total - num;
    if (operator === 'X')
        result = total * num;
    return result;
};
const calculateResult = (total) => {
    const result = total.match(new RegExp('(\\-?[\\d]{1,3})(X|\\-|\\+|\\/|\\=)(\\-?[\\d]{1,3})'));
    console.log(result);
    return calculateOperator(Number(result[1]), result[2], Number(result[3]));
};
const digitClickEvent = (e) => {
    const eventTarget = e.target;
    const totalTarget = document.getElementById('total');
    if (Number(totalTarget.innerText) === 0) {
        document.getElementById('total').innerText = eventTarget.innerText;
    }
    else {
        const result = checkValidInput(document.getElementById('total').innerText + eventTarget.innerText);
        if (result === '') {
            return;
        }
        document.getElementById('total').innerText = result;
    }
};
const operatorEvent = (e) => {
    const eventTarget = e.target;
    const totalTarget = document.getElementById('total');
    if (eventTarget.innerText === '=') {
        setCountOperationdataSet('0');
        document.getElementById('total').innerText = String(Math.floor(calculateResult(document.getElementById('total').innerText)));
        return;
    }
    if (Number(totalTarget.innerText) === 0) {
        return;
    }
    else if (!['/', '-', 'X', '+'].includes(totalTarget.innerText[totalTarget.innerText.length - 1])) {
        if (getCountOperationdataSet() === '1') {
            return;
        }
        setCountOperationdataSet('1');
        document.getElementById('total').innerText += eventTarget.innerText;
    }
};
const ACEvent = () => {
    document.getElementById('total').innerText = '0';
};
export default function App() {
    setCountOperationdataSet('0');
    document.getElementsByClassName('digits')[0].addEventListener('click', e => {
        digitClickEvent(e);
    });
    document
        .getElementsByClassName('operations')[0]
        .addEventListener('click', e => {
        operatorEvent(e);
    });
    document
        .getElementsByClassName('modifier')[0]
        .addEventListener('click', () => {
        ACEvent();
    });
}
App();
