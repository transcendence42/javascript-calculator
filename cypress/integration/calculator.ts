//<reference types="cypress" />
//@ts-check
describe("addition test", () => {
  it("add one digit numbers: 9 + 2", () => {
    cy.visit("/");
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("+")
      .click();
    cy.get(".digit")
      .contains("2")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 9 + 2);
  });
  it("add one digit numbers: -9 + 2", () => {
    cy.reload();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("+")
      .click();
    cy.get(".digit")
      .contains("2")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", -9 + 2);
  });
  it("add two digit numbers: 36 + 87", () => {
    cy.reload();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".operation")
      .contains("+")
      .click();
    cy.get(".digit")
      .contains("8")
      .click();
    cy.get(".digit")
      .contains("7")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 36 + 87);
  });
  it("add three digit numbers: 369 + 876", () => {
    cy.reload();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("+")
      .click();
    cy.get(".digit")
      .contains("8")
      .click();
    cy.get(".digit")
      .contains("7")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 369 + 876);
  });
});

describe("subtraction test", () => {
  it("subtract one digit numbers: 9 - 2", () => {
    cy.visit("/");
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("2")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 9 - 2);
  });
  it("subtract one digit numbers: -9 - 2", () => {
    cy.reload();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("2")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", -9 - 2);
  });
  it("subtract two digit numbers: 36 - 87", () => {
    cy.reload();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("8")
      .click();
    cy.get(".digit")
      .contains("7")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 36 - 87);
  });
  it("subtract three digit numbers: 369 - 876", () => {
    cy.reload();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("8")
      .click();
    cy.get(".digit")
      .contains("7")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 369 - 876);
  });
});

describe("multiplication test", () => {
  it("multiply one digit numbers: 9 * 2", () => {
    cy.visit("/");
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("X")
      .click();
    cy.get(".digit")
      .contains("2")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 9 * 2);
  });
  it("multiply one digit numbers: -9 * 2", () => {
    cy.reload();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("X")
      .click();
    cy.get(".digit")
      .contains("2")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", -9 * 2);
  });
  it("multiply two digit numbers: 36 * 87", () => {
    cy.reload();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".operation")
      .contains("X")
      .click();
    cy.get(".digit")
      .contains("8")
      .click();
    cy.get(".digit")
      .contains("7")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 36 * 87);
  });
  it("multiply three digit numbers: 369 * 876", () => {
    cy.reload();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("X")
      .click();
    cy.get(".digit")
      .contains("8")
      .click();
    cy.get(".digit")
      .contains("7")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 369 * 876);
  });
});

describe("division test", () => {
  it("divide one digit numbers: 9 / 3", () => {
    cy.visit("/");
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("/")
      .click();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 9 / 3);
  });
  it("divide one digit numbers: -9 / 3", () => {
    cy.reload();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("/")
      .click();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", -9 / 3);
  });
  it("divide two digit numbers: 99 / 33", () => {
    cy.visit("/");
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("/")
      .click();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 99 / 33);
  });
  it("divide two digit numbers: -99 / 33", () => {
    cy.reload();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("/")
      .click();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", -99 / 33);
  });
  it("divide three digit numbers: 999 / 333", () => {
    cy.visit("/");
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("/")
      .click();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", 999 / 333);
  });
});

describe("AC test", () => {
  it("click AC button", () => {
    cy.get(".modifier").click();
    cy.get("#total").should("have.text", "0");
  });
});

describe("decimal point test", () => {
  it("divide one digit numbers: 9 / 2", () => {
    cy.visit("/");
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("/")
      .click();
    cy.get(".digit")
      .contains("2")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", Math.floor(9 / 2));
  });
  it("divide one digit numbers: -9 / 2", () => {
    cy.reload();
    cy.get(".operation")
      .contains("-")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("/")
      .click();
    cy.get(".digit")
      .contains("2")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", Math.floor(-9 / 2));
  });
  it("divide two digit numbers: 36 / 87", () => {
    cy.reload();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".operation")
      .contains("/")
      .click();
    cy.get(".digit")
      .contains("8")
      .click();
    cy.get(".digit")
      .contains("7")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", Math.floor(36 / 87));
  });
  it("divide three digit numbers: 369 / 876", () => {
    cy.reload();
    cy.get(".digit")
      .contains("3")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".digit")
      .contains("9")
      .click();
    cy.get(".operation")
      .contains("/")
      .click();
    cy.get(".digit")
      .contains("8")
      .click();
    cy.get(".digit")
      .contains("7")
      .click();
    cy.get(".digit")
      .contains("6")
      .click();
    cy.get(".operation")
      .contains("=")
      .click();
    cy.get("#total").should("have.text", Math.floor(369 / 876));
  });
});
