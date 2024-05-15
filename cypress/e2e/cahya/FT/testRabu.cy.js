const { should } = require("chai");

describe('template spec', () => {
  it('coba sign up', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('pororo');
    cy.get('#lastname').type('lufi');
    cy.get('#email_address').type('pororo3@oo.com');
    cy.get('#password').type('November7!');
    cy.get('#password-confirmation').type('November7!');
    cy.get('#form-validate > .account').click();
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('.message-success').should('be.visible').should('contain','Thank you for registering with Main Website Store.');
    cy.get('#maincontent').should('be.visible').should('contain','My Account');
    /* ==== End Cypress Studio ==== */
  })
})