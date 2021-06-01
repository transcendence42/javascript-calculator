import { setCountOperationdataSet } from './operation-data-set.js';

import { digitClickEvent, operatorEvent, ACEvent } from './controller.js';

export default function App(): void {
  setCountOperationdataSet('0');
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
