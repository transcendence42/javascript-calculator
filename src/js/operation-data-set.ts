const getCountOperationdataSet = (): string => {
  const operations = document.getElementsByClassName(
    'operations'
  )[0]! as HTMLElement;
  
  return operations.dataset['count'] ? operations.dataset['count'] : '';
};

const setCountOperationdataSet = (count: string): void => {
  const operations = document.getElementsByClassName(
    'operations'
  )[0]! as HTMLElement;
  operations.dataset['count'] = count;
};

export { getCountOperationdataSet, setCountOperationdataSet };
