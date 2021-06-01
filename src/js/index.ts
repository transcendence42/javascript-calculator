const calculateOperator = (
  total: number,
  operator: string,
  num: number
): number => {
  let result: number = 0;

  if (operator === '+') result = total + num;
  if (operator === '/') result = total / num;
  if (operator === '%') result = total % num;
  if (operator === '-') result = total - num;
  if (operator === 'X') result = total * num;
  return result;
};

const checkValidInput = (total: string): string => {
  const result: any = total.match(
    new RegExp('(\\-?[\\d]{1,3})(X|\\-|\\+|\\/|\\=)?(\\-?[\\d]{1,3})?')
  );
  if (result[2] === undefined) {
    if (result[1] === undefined) {
      return '';
    }
    return result[1];
  }
  if (result[3] === undefined) {
    return result[1] + result[2];
  }
  return result[1] + result[2] + result[3];
};

const calculateResult = (total: string): number => {
  const result: any = total.match(
    new RegExp('(\\-?[\\d]{1,3})(X|\\-|\\+|\\/|\\=)(\\-?[\\d]{1,3})')
  );
  console.log(result);
  return calculateOperator(Number(result[1]), result[2], Number(result[3]));
};

const digitClickEvent = (e: Event): void => {
  const eventTarget: HTMLElement = e.target as HTMLElement;
  const totalTarget: HTMLElement | null = document.getElementById('total');

  if (Number(totalTarget!.innerText) === 0) {
    document.getElementById('total')!.innerText = eventTarget.innerText;
  } else {
    const result = checkValidInput(
      document.getElementById('total')!.innerText + eventTarget.innerText
    );
    if (result === '') {
      return;
    }
    document.getElementById('total')!.innerText = result;
  }
};

const operatorEvent = (e: Event): void => {
  const eventTarget: HTMLElement = e.target as HTMLElement;
  const totalTarget: HTMLElement | null = document.getElementById('total');

  if (eventTarget.innerText === '=') {
    document.getElementById('total')!.innerText = String(
      Math.floor(calculateResult(document.getElementById('total')!.innerText))
    );
    return;
  }

  if (Number(totalTarget!.innerText) === 0) {
    return;
  } else {
    document.getElementById('total')!.innerText += eventTarget.innerText;
  }
};

const ACEvent = (): void => {
  document.getElementById('total')!.innerText = '0';
};

export default function App(): void {
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
