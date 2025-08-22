/// <reference types="cypress" />

it("Wikipedia", () => {
  cy.visit("https://www.wikipedia.org/");
  cy.get('[name="search"]').click().type("Ukraine{enter}");
});
