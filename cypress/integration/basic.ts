context("calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/");
  });

  it("calculator's first value", () => {
    cy.get("#total").should("have.text", 0);
  });

  it("plus test", () => {
    // 123 + 234 = 357
    cy.get(".digit").contains(1).click();
    cy.get(".digit").contains(2).click();
    cy.get(".digit").contains(3).click();
    cy.get(".operation").contains("+").click();
    cy.get(".digit").contains(2).click();
    cy.get(".digit").contains(3).click();
    cy.get(".digit").contains(4).click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", 357);
  });

  it("minus test", () => {
    // 234 - 123 = 111
    cy.get(".digit").contains(2).click();
    cy.get(".digit").contains(3).click();
    cy.get(".digit").contains(4).click();
    cy.get(".operation").contains("-").click();
    cy.get(".digit").contains(1).click();
    cy.get(".digit").contains(2).click();
    cy.get(".digit").contains(3).click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", 111);
  });

  it("multiply test", () => {
    // 23 * 456 = 10488
    cy.get(".digit").contains(2).click();
    cy.get(".digit").contains(3).click();
    cy.get(".operation").contains("X").click();
    cy.get(".digit").contains(4).click();
    cy.get(".digit").contains(5).click();
    cy.get(".digit").contains(6).click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", 10488);
  });

  it("divide test", () => {
    // 777 / 111 = 7
    cy.get(".digit").contains(7).click();
    cy.get(".digit").contains(7).click();
    cy.get(".digit").contains(7).click();
    cy.get(".operation").contains("/").click();
    cy.get(".digit").contains(1).click();
    cy.get(".digit").contains(1).click();
    cy.get(".digit").contains(1).click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", 7);
  });

  it("AC test", () => {
    cy.get(".digit").contains(1).click();
    cy.get(".digit").contains(2).click();
    cy.get("button.modifier").click();
    cy.get("#total").should("have.text", 0);
  });

  it("max num test", () => {
    // 123 + 999 = 1122
    cy.get(".digit").contains(1).click();
    cy.get(".digit").contains(2).click();
    cy.get(".digit").contains(3).click();
    cy.get(".digit").contains(9).click();
    cy.get("#total").should("have.text", 123);
    cy.get(".operation").contains("+").click();
    cy.get(".digit").contains(9).click();
    cy.get(".digit").contains(9).click();
    cy.get(".digit").contains(9).click();
    cy.get(".digit").contains(9).click();
    cy.get("#total").should("have.text", 999);
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", 1122);
  });

  it("show only integer test", () => {
    // 50 / 3 = 16
    cy.get(".digit").contains(5).click();
    cy.get(".digit").contains(0).click();
    cy.get(".operation").contains("/").click();
    cy.get(".digit").contains(3).click();
    cy.get(".operation").contains("=").click();
    cy.get("#total").should("have.text", 16);
  });
});
