describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').clear('g');
    cy.get('#firstname').type('ghjgsjhga');
    cy.get('#lastname').clear('gsd');
    cy.get('#lastname').type('gsdjkhsd');
    cy.get('#email_address').clear('gsd');
    cy.get('#email_address').type('gsdkj@gdgj.com');
    cy.get('#password').clear('N');
    cy.get('#password').type('November7!');
    cy.get('#password-confirmation').clear('N');
    cy.get('#password-confirmation').type('November7!');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();
    /* ==== End Cypress Studio ==== */
  })
})