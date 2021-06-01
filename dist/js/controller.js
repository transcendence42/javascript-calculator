import { getCountOperationdataSet, setCountOperationdataSet } from './operation-data-set.js';
import { checkValidInput } from './check.js';
import { calculateResult } from './calculate-util.js';
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
export { digitClickEvent, operatorEvent, ACEvent };
