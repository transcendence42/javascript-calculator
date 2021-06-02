import { pushTotalValue, clearTotalValue } from '../view/index.js';

export const controller = (): void => {
  document
    .getElementsByClassName("digits")[0]
    .addEventListener("click", (e) => {
      pushTotalValue(e);
    });
  document
    .getElementsByClassName("operations")[0]
    .addEventListener("click", (e) => {
      pushTotalValue(e);
    });
  document
    .getElementsByClassName("modifier")[0]
    .addEventListener("click", () => {
      clearTotalValue();
    })
};
