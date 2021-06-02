export const clearTotalValue = (): void => {
  document.getElementById('total')!.innerText = '0';
}

export const pushTotalValue = (e: Event): void => {
  const digitTarget: HTMLElement = e.target as HTMLElement;
  const totalTarget: HTMLElement | null = document.getElementById('total');
  let digitValue: string = digitTarget!.innerText;

  if (totalTarget!.innerText === '0') {
    totalTarget!.innerText = digitValue;
    return;
  }
  totalTarget!.innerText += digitValue;
}
