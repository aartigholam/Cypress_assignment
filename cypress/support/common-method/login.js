/// <reference types="cypress" />

Cypress.Commands.add('login',(email, password)=>{

    cy.get("#email1").type(email)
    cy.get("#password1").type(password)
    cy.get("button[type='submit']").click()
    cy.wait(5000)
    cy.contains("Sign out").should('have.text',"Sign out")
    
})

Cypress.Commands.add('logout',()=>{

    cy.contains("Sign out").click()
    cy.url().should("contain","login")
})

Cypress.Commands.add('reg', (uname,uemail,upassword)=> {

        cy.get("input[placeholder='Name']").type(uname)
        cy.get("input[placeholder='Email']").type(uemail)
        cy.get("input[placeholder='Password']").type(upassword)
        cy.contains("Testing").click()
        cy.get("input[value='Female']").click()
        cy.get("select[name='state']").select("Goa")
        cy.get('.submit-btn').click()
        cy.wait(5000)
})