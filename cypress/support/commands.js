// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add("verifyErrorMessage", (possibleErrorMessages) => {
  cy.get(".message-error", { timeout: 20000 }).then(($errorMessages) => {
    if ($errorMessages.length > 0) {
      const displayedErrors = $errorMessages
        .toArray()
        .map((el) => el.innerText);
      const randomErrorMessageDisplayed = displayedErrors.some((errorMessage) =>
        possibleErrorMessages.includes(errorMessage)
      );
      expect(randomErrorMessageDisplayed).to.be.true;
    } else {
      expect(true, "No error message displayed").to.be.true;
    }
  });
  cy.wait(Math.random() * 4000 + 1000);
});

Cypress.Commands.add("apiRequest", ({ method, url, auth, body }) => {
  const requestOptions = {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.accessToken}`,
    },
    body: JSON.stringify(body),
  };

  return cy.request(requestOptions);
});

//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// const faker = require('faker');
// Cypress.Commands.add('generateRandomEmail', () => {
//   return faker.internet.email();
// });