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
    return calculateOperator(Number(result[1]), result[2], Number(result[3]));
};
export { calculateResult };
