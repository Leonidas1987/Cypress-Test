/// <reference types="cypress" />
it("Google", () => {
  cy.visit("https://www.google.com/");
  cy.get('[name="q"]').click({ force: true }).type("Israel{enter}");
});
