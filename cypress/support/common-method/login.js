/// <reference types="cypress" />

Cypress.Commands.add('login',(email, password)=>{

    cy.get("#email1").type(email)
    cy.get("#password1").type(password)
    cy.get("button[type='submit']").click()
})