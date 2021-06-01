//<reference types="cypress" />
//@ts-check
describe('addition test', () => {
    it ('add one digit numbers: 9 + 1', () => {
        cy.visit('/');
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('+').click();
        cy.get('.digit').contains('1').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (9 + 1));
    })  
    it ('add one digit numbers: -9 + 1', () => {
        cy.reload();
        cy.get('.operation').contains('-').click();
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('+').click();
        cy.get('.digit').contains('1').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (-9 + 1));
    })
    it ('add two digit numbers: 36 + 87', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.operation').contains('+').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (36 + 87));
    })
    it ('add three digit numbers: 369 + 876', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('+').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('.digit').contains('6').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (369 + 876));
    })
});

describe('subtraction test', () => {
    it ('subtract one digit numbers: 9 - 1', () => {
        cy.visit('/');
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('-').click();
        cy.get('.digit').contains('1').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (9 - 1));
    })
    it ('subtract one digit numbers: -9 - 1', () => {
        cy.reload();
        cy.get('.operation').contains('-').click();
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('-').click();
        cy.get('.digit').contains('1').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (-9 - 1));
    })
    it ('subtract two digit numbers: 36 - 87', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.operation').contains('-').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (36 - 87));
    })
    it ('subtract three digit numbers: 369 - 876', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('-').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('.digit').contains('6').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (369 - 876));
    })
});

describe('multiplication test', () => {
    it ('multiply one digit numbers: 9 * 1', () => {
        cy.visit('/');
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('X').click();
        cy.get('.digit').contains('1').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (9 * 1));
    })
    it ('multiply one digit numbers: -9 * 1', () => {
        cy.reload();
        cy.get('.operation').contains('-').click();
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('X').click();
        cy.get('.digit').contains('1').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (-9 * 1));
    })
    it ('multiply two digit numbers: 36 * 87', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.operation').contains('X').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (36 * 87));
    })
    it ('multiply three digit numbers: 369 * 876', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('X').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('.digit').contains('6').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (369 * 876));
    })
});

describe('division test', () => {
    it ('divide one digit numbers: 9 / 1', () => {
        cy.visit('/');
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('/').click();
        cy.get('.digit').contains('1').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (9 / 1));
    })
    it ('divide one digit numbers: -9 / 1', () => {
        cy.reload();
        cy.get('.digit').contains('-9').click();
        cy.get('.operation').contains('/').click();
        cy.get('.digit').contains('1').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (-9 / 1));
    })
    it ('divide two digit numbers: 36 / 87', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.operation').contains('/').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (36 / 87));
    })
    it ('divide three digit numbers: 369 / 876', () => {
        cy.reload();
        cy.get('.digit').contains('3').click();
        cy.get('.digit').contains('6').click();
        cy.get('.digit').contains('9').click();
        cy.get('.operation').contains('/').click();
        cy.get('.digit').contains('8').click();
        cy.get('.digit').contains('7').click();
        cy.get('.digit').contains('6').click();
        cy.get('.operation').contains('=').click();
        cy.get('#total').should('have.text', (369 / 876));
    })
});