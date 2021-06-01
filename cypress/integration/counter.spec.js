const testInputClickEvent = (first, result) => {
  for (let item of first) {
    cy.get('.digit')
      .contains(item)
      .click();
  }
  cy.get('#total').should('have.text', result);
};

const testTwoInputCalculateEvent = (first, oper, second, result) => {};

describe('initial value', () => {
  beforeEach(() => {
    cy.visit('/javascript-calculator/');
  });
  it('total value', () => {
    cy.get('#total').should('have.text', '0');
  });
});

describe('Render digit when button clicked', () => {
  beforeEach(() => {
    cy.visit('/javascript-calculator/');
  });
  it('button 0', () => {
    testInputClickEvent([0], '0');
  });
  it('button 1', () => {
    testInputClickEvent([1], '1');
  });
  it('button 2', () => {
    testInputClickEvent([2], '2');
  });
  it('button 3', () => {
    testInputClickEvent([3], '3');
  });
  it('button 4', () => {
    testInputClickEvent([4], '4');
  });
  it('button 5', () => {
    testInputClickEvent([5], '5');
  });
  it('button 6', () => {
    testInputClickEvent([6], '6');
  });
  it('button 7', () => {
    testInputClickEvent([7], '7');
  });
  it('button 8', () => {
    testInputClickEvent([8], '8');
  });
  it('button 9', () => {
    testInputClickEvent([9], '9');
  });
});

describe('Max input length 3', () => {
  beforeEach(() => {
    cy.visit('/javascript-calculator/');
  });
  it('button 1 2', () => {
    testInputClickEvent([1, 2], '12');
  });
  it('button 4 2', () => {
    testInputClickEvent([4, 2], '42');
  });
  it('button 0 2', () => {
    testInputClickEvent([0, 2], '2');
  });
  it('button 1 2 3', () => {
    testInputClickEvent([1, 2, 3], '123');
  });
  it('button 1 2 3 4', () => {
    testInputClickEvent([1, 2, 3], '123');
  });
});
