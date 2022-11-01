// Task 1 – Create new user and login with same user

// Open https://ineuron-courses.vercel.app/
// Click on Login Button
// Click on New User link (use contains method)

// Verify Sign up button is disabled before entering value
    
// Enter Name, Email, Password
// Select testing from checkbox
// Select Gender
// Select State as “Goa”
// Click on Sign up

describe("Create new user and login with same user",()=>{

    it("Create new user",()=>{

        cy.visit("https://ineuron-courses.vercel.app/")

        cy.contains("Log in").click()
        cy.contains("New user? Signup").click()
        cy.contains("Sign up").should("be.disabled")

        cy.get("input[placeholder='Name']").type("aarti")
        cy.get("input[placeholder='Email']").type("aarti21@test.com")
        cy.get("input[placeholder='Password']").type("aarti123")
        cy.get("input[type='checkbox']").eq(8).click()
        cy.get("input[value='Female']").click()
        cy.get("select[name='state']").select("Goa")
        cy.get('.submit-btn').click()

    // User above used details for login
    // Verify user is able to login
    // Click on Logout and verify  user is able to see login page

        cy.contains("Already a user? Login").click()
        cy.get("#email1").type('aarti21@test.com')
        cy.get("#password1").type('aarti123')
        cy.get("button[type='submit']").click()
        cy.get(".welcomeMessage").should("contain","Welcome aarti to iNeuron Courses")
        cy.contains("Sign out").click()
        cy.url().should("contain","login")

    })
  
})