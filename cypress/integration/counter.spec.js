describe("initial value", () => {
  beforeEach(() => {
    cy.visit("/javascript-calculator/");
  });

  it("total value", () => {
    cy.get("#total").should("have.text", "0");
  });
});

describe("Render digit when button clicked", () => {
  beforeEach(() => {
    cy.visit("/javascript-calculator/");
  });
  it("button 0", () => {
    cy.get(".digit")
      .contains(0)
      .click();
    cy.get("#total").should("have.text", "0");
  });
  it("button 1", () => {
    cy.get(".digit")
      .contains(1)
      .click();
    cy.get("#total").should("have.text", "1");
  });
});

describe("Render digit when calculate +", () => {
  beforeEach(() => {
    cy.visit("/javascript-calculator/");
  });
  it("button 0", () => {
    cy.get(".digit")
      .contains(1)
      .click();
    cy.get(".operation")
      .contains("+")
      .click();
    cy.get(".digit")
      .contains(2)
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", "2");
  });
});

// cy.visit('/javascript-calculator/');
// let num1 = 0;
// let num2 = 1;

// while (num2 < 6) {
//     cy.get('.digit').contains(num1).click();
//     cy.get('.operation').contains('+').click();
//     cy.get('.digit').contains(num2).click();
//     cy.get('.operation').contains('=').click();
//     cy.get('#total')

//     num1 += 1;
//     num2 += 1;
// }
