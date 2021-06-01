export const clearTotalValue = (): void => {
  document.getElementById('total')!.innerText = '0';
}

export const pushTotalValue = (e: Event): void => {
  const digitTarget: HTMLElement = e.target as HTMLElement;
  const digitValue: string = digitTarget!.innerText;
  const totalTarget: HTMLElement | null = document.getElementById('total');
  let totalValue: string = totalTarget!.innerText;

  if (totalValue === '0') {
    totalValue = digitValue;
    return;
  }
  totalValue + digitValue;
}
