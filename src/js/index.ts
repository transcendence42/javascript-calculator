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

export default function App(): void {
  document.getElementsByClassName('digits')[0].addEventListener('click', e => {
    digitClickEvent(e);
  });
}

App();
