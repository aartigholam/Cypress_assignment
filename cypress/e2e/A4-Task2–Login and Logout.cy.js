// Task 2 – Login and Logout 
// Open https://ineuron-courses.vercel.app/login

// Enter username as  ineuron@ineuron.ai
// Enter password as ineuron
// Click on login button
// Verify welcome message 
// Note- Message will fade away in 10 seconds

// Click on Logout
// Verify user is logged out 

describe("Login and Logout",()=>{
    it("Successful login and logout",()=>{

        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.get("#email1").type("ineuron@ineuron.ai")
        cy.get("#password1").type("ineuron")
        cy.get("button[type='submit']").click()
        cy.wait(5000)
        cy.get(".welcomeMessage").should("contain","Welcome iNeuron to iNeuron Courses")
        cy.contains("Sign out").click()
        cy.url().should("contain","login")
    })
})
