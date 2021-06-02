const getCountOperationdataSet = () => {
    const operations = document.getElementsByClassName('operations')[0];
    return operations.dataset['count'] ? operations.dataset['count'] : '';
};
const setCountOperationdataSet = (count) => {
    const operations = document.getElementsByClassName('operations')[0];
    operations.dataset['count'] = count;
};
export { getCountOperationdataSet, setCountOperationdataSet };
