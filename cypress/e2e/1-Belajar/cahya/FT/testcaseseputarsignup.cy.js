const { should } = require("chai");


import userdata from "../../../../fixtures/data/userData.json";
import account from "../../../../fixtures/data/account.json";
import message from "../../../../fixtures/data/messageData.json";
import Navigation from "../../../../support/PageObject/Navigation";

const emailrandom = `coba${Math.floor(Math.random()*10000)}@wolololo.com`;
const submit = Navigation.getSubmit();


describe('template spec', () => {    
 beforeEach(() => {
  Navigation.visitHomepage();
  cy.clearAllCookies;
 });

  it('Case01, sign up new account success (Positive)', () => {
    cy.contains('Create an Account').click();
    cy.get(account.first).type(userdata.validUser.firstName);
    cy.get(account.last).type(userdata.validUser.lastName);
    cy.get(account.email).type(emailrandom);
    cy.get(account.paswd).type(userdata.validUser.password);
    cy.get(account.paswdConfirm).type(userdata.validUser.password);
    cy.get(submit).click();
    cy.get(account.successMessageRegist).should('be.visible').should('contain',message.registerSuccess);
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();
    cy.clearAllCookies;
  })

  it('Case02, tap Create account without fill any data (Negative)', () => {
    cy.contains('Create an Account').click();
    cy.get(submit).click();
    cy.get('#firstname-error').should('be.visible').should('contain','This is a required field');
    cy.get('#lastname-error').should('be.visible').should('contain','This is a required field');
    cy.get('#email_address-error').should('be.visible').should('contain','This is a required field');
    cy.get('#password-error').should('be.visible').should('contain','This is a required field');
    cy.get('#password-confirmation-error').should('be.visible').should('contain','This is a required field');
    cy.clearAllCookies;
  })

  it('Case03, input same data (Negative)', () => {
    cy.contains('Create an Account').click();
    cy.get(account.first).type(userdata.validUser.firstName);
    cy.get(account.last).type(userdata.validUser.lastName);
    cy.get(account.email).type(userdata.validUser.email);
    cy.get(account.paswd).type(userdata.validUser.password);
    cy.get(account.paswdConfirm).type(userdata.validUser.password);
    cy.get(submit).click();
    cy.get('.message-error > div').should('be.visible').should('contain','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.');
    cy.clearAllCookies;
  })

  it('Case04, input weak password (Negative)', () => {
    cy.contains('Create an Account').click();
    cy.get(account.first).type(userdata.invalidUser2.firstName);
    cy.get(account.last).type(userdata.invalidUser2.lastName);
    cy.get(account.email).type(emailrandom);
    cy.get(account.paswd).type(userdata.invalidUser2.password);
    cy.get(account.paswdConfirm).type(userdata.invalidUser2.password);
    cy.get(submit).click();
    cy.get('#password-error').should('be.visible').should('contain',message.password2);
    cy.clearAllCookies;
  })

  it('Case05, input different password (Negative)', () => {
    cy.contains('Create an Account').click();
    cy.get(account.first).type(userdata.invalidUser2.firstName);
    cy.get(account.last).type(userdata.invalidUser2.lastName);
    cy.get(account.email).type(emailrandom);
    cy.get(account.paswd).type(userdata.invalidUser2.password);
    cy.get(account.paswdConfirm).type(userdata.invalidUser3.password);
    cy.get(submit).click();
    cy.get('#password-error').should('be.visible').should('contain',message.password2);
    cy.get('#password-confirmation-error').should('be.visible').should('contain',message.passwordConfirmError);
    //cy.clearAllCookies;
  })  


})

