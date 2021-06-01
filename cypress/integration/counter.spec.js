const testInputClickEvent = (first, result) => {
  for (let item of first) {
    cy.get('.digit')
      .contains(item)
      .click();
  }
  cy.get('#total').should('have.text', result);
};

const testTwoInputCalculateEvent = (first, oper, second, result) => {
  for (let item of first) {
    cy.get('.digit')
      .contains(item)
      .click();
  }
  cy.get('.operations')
    .contains(oper)
    .click();
  for (let item of second) {
    cy.get('.digit')
      .contains(item)
      .click();
  }
  cy.get('.operations')
    .contains('=')
    .click();
  cy.get('#total').should('have.text', result);
};

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

describe('Render max input length 3 when button click', () => {
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
    testInputClickEvent([1, 2, 3, 4], '123');
  });
  it('', () => {});
});

describe('Calculate two input when button click', () => {
  beforeEach(() => {
    cy.visit('/javascript-calculator/');
  });
  it('button 1 + 2', () => {
    testTwoInputCalculateEvent([1], '+', [2], '3');
  });
  it('button 1234567 + 1234567', () => {
    testTwoInputCalculateEvent([1,2,3,4,5,6,7], '+', [1,2,3,4,5,6,7], '246');
  });
  it('button 42424242 + 42424242', () => {
    testTwoInputCalculateEvent([4,2,4,2,4,2,4,2], '+', [4,2,4,2,4,2,4,2], '848');
  });
});

describe('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
  beforeEach(() => {
    cy.visit('/javascript-calculator/');
  });
  it('button 1 / 3', () => {
    testTwoInputCalculateEvent([1], '/', [3], '0');
  });
  it('button 3 / 2', () => {
    testTwoInputCalculateEvent([3], '/', [2], '1');
  });
  it('button 5 / 2', () => {
    testTwoInputCalculateEvent([5], '/', [2], '2');
  });
});
