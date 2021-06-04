"use strict";
const calculate = (number1, number2, operator) => {
    const operations = {
        ["+"]: (x, y) => {
            return x + y;
        },
        ["-"]: (x, y) => {
            return x - y;
        },
        ["X"]: (x, y) => {
            return x * y;
        },
        ["/"]: (x, y) => {
            return Math.floor(x / y);
        },
    };
    return operations[operator](number1, number2);
};
