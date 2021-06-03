const calculate = (number1, operator, number2, expectedResult) => {
  cy.get('.modifiers').click();
  for (let index = 0 ; index < number1.length ; index += 1) {
    cy.get('.digit').contains(number1[index]).click();
  }
	cy.get('.operations').contains(operator).click();
  for (let index = 0 ; index < number2.length ; index += 1) {
    cy.get('.digit').contains(number2[index]).click();
  }
	cy.get('.operations').contains('=').click();
	cy.get('#total').should('have.text', expectedResult)
}

describe('계산기 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

	it('1. 숫자 입력 시 3자리까지만 결과창에 표시', () => {
    cy.get('.digit').contains('1').click();
    cy.get('#total').should('have.text', '1');
    cy.get('.digit').contains('2').click();
    cy.get('#total').should('have.text', '12');
    cy.get('.digit').contains('3').click();
    cy.get('#total').should('have.text', '123');
    cy.get('.digit').contains('4').click();
    cy.get('#total').should('have.text', '123');
    cy.get('.digit').contains('5').click();
    cy.get('#total').should('have.text', '123');
  });

  it('2. [AC] 입력 시 0으로 초기화', () => {
    cy.get('.digit').contains('4').click();
    cy.get('.digit').contains('2').click();
    cy.get('.modifiers').click();
    cy.get('#total').should('have.text', '0');
  })

  it('3. 연산자는 1개만 입력 가능', () => {
    cy.get('.digit').contains('4').click();
    cy.get('.digit').contains('2').click();
    cy.get('.operations').contains('+').click();
    cy.get('.operations').contains('-').click();
    cy.get('#total').should('have.text', '42+');
    cy.get('.modifiers').click();
  })

  it('4. [숫자][연산자][숫자] 포맷 이후 연산자가 올 수 없음', () => {
    cy.get('.digit').contains('4').click();
    cy.get('.digit').contains('2').click();
    cy.get('.operations').contains('+').click();
    cy.get('.digit').contains('4').click();
    cy.get('.digit').contains('2').click();
    cy.get('.operations').contains('-').click();
    cy.get('#total').should('have.text', '42+42');
    cy.get('.modifiers').click();
  })

  it('5. 한 자릿수 사칙연산', () => {
    calculate([4], '+', [2], '6');
    calculate([4], '-', [2], '2');
    calculate([4], 'X', [2], '8');
    calculate([4], '/', [2], '2');
  })

  it('6. 두 자릿수 사칙연산', () => {
    calculate([4, 2], '+', [2, 4], '66');
    calculate([4, 2], '-', [2, 4], '18');
    calculate([4, 2], 'X', [2, 4], '1008');
    calculate([4, 2], '/', [2, 4], '1');
  })

  it('7. 세 자릿수 사칙연산', () => {
    calculate([1, 2, 3], '+', [3, 2, 1], '444');
    calculate([1, 2, 3], '-', [3, 2, 1], '-198');
    calculate([1, 2, 3], 'X', [3, 2, 1], '39483');
    calculate([1, 2, 3], '/', [3, 2, 1], '0');
  })
});
