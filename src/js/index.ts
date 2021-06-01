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
  if (operator === '*') result = total * num;
  return result;
};

const calculateResult = (total: string): number => {
  const result: any = total.match(
    new RegExp('(\\??[\\d])(X|\\-|\\+|\\/|\\=)([\\d])')
  );
  return calculateOperator(Number(result[1]), result[2], Number(result[3]));
};

const digitClickEvent = (e: Event): void => {
  const eventTarget: HTMLElement = e.target as HTMLElement;
  const totalTarget: HTMLElement | null = document.getElementById('total');

  if (totalTarget!.innerText.length === 3) {
    return;
  }

  if (Number(totalTarget!.innerText) === 0) {
    document.getElementById('total')!.innerText = eventTarget.innerText;
  } else {
    document.getElementById('total')!.innerText += eventTarget.innerText;
  }
};

const operatorEvent = (e: Event): void => {
  const eventTarget: HTMLElement = e.target as HTMLElement;
  const totalTarget: HTMLElement | null = document.getElementById('total');

  if (totalTarget!.innerText.length === 3) {
    if (eventTarget.innerText === '=') {
      document.getElementById('total')!.innerText = String(
        calculateResult(document.getElementById('total')!.innerText)
      );
    }
    return;
  }

  if (Number(totalTarget!.innerText) === 0) {
    return;
  } else {
    document.getElementById('total')!.innerText += eventTarget.innerText;
  }
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
}

App();
