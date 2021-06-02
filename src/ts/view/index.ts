export const clearTotalValue = (): void => {
  document.getElementById('total')!.innerText = '0';
}

export const pushTotalValue = (e: Event): void => {
  const digitTarget: HTMLElement = e.target as HTMLElement;
  let digitValue: string = digitTarget!.innerText;
  const totalTarget: HTMLElement | null = document.getElementById('total');

  if (totalTarget!.innerText === '0') {
    totalTarget!.innerText = digitValue;
    return;
  }
  totalTarget!.innerText += digitValue;
}
