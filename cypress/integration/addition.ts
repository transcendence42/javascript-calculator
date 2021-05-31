//<reference types="cypress" />
//@ts-check
describe('addition test', () => {
    it ('add one digit numbers', () => {
        cy.visit('/');
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('+').click();
        cy.get('.digit').contains('1').click();
        cy.get('#total').should('value', 10);
    })
    it ('add two digit numbers', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.operation').contains('+').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('#total').should('value', (36 + 87));
    })
    it ('add three digit numbers', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('+').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('.digit').contains('6').click();
        cy.get('#total').should('value', (369 + 876));
    })
});