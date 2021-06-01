const calculate = (number1, operator, number2, expectedResult) => {
	cy.get('.digit').contains(number1).click();
	cy.get('.operations').contains(operator).click();
	cy.get('.digit').contains(number2).click();
	cy.get('.operations').contains('=').click();
	cy.get('#total').should('have.text', expectedResult)
}

describe('계산기 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

	it('1. 숫자 입력 시 결과창에 표시', () => {
    let total = '0';
    for (let digit = 1; digit < 10 ; digit += 1) {
      cy.get('.digit').contains(String(digit)).click();
      cy.get('#total').should('have.text', total += String(digit));
    }
  });

  it('2. [AC] 입력 시 0으로 초기화', () => {
    cy.get('.digit').contains('4').click();
    cy.get('.digit').contains('2').click();
    cy.get('.modifiers').click();
    cy.get('#total').should('have.text', '0');
  })

  it('3. 양수 사칙연산', () => {
    calculate('4', '+', '2', '6');
    calculate('4', '-', '2', '2');
    calculate('4', 'X', '2', '8');
    calculate('4', '/', '2', '2');

    calculate('42', '+', '42', '84');
    calculate('42', '-', '42', '0');
    calculate('42', 'X', '42', '1764');
    calculate('42', '/', '42', '1');
  })
});
