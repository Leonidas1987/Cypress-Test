/// <reference types="cypress" />

it("Login-Test", function () {
  cy.visit("https://www.edu.goit.global/uk/account/login?redirect=/homepage");
  cy.get('[name="email"]').type("leon.filhitsayh@gmail.com");
  cy.get('[name="password"]').type("Leofil190887!");
  cy.get(".eckniwg2").click();
});
