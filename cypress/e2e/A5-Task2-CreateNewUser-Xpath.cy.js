// Task 1 – Create new user and login with same user

// Task 2- Perform the same task mentioned above but use only xpath locator to perform the task.

describe("Create new user and login with same user",()=>{

    it("Create new user",()=>{

        cy.visit("https://ineuron-courses.vercel.app/")

        cy.xpath("//button[1]").click()
        cy.xpath("//a[@class='subLink']").click()
        cy.xpath("//button[@type='submit']").should("be.disabled")

        cy.xpath("//input[@id='name']").type("aarti")
        cy.xpath("//input[@id='email']").type("aarti1@test.com")
        cy.xpath("//input[@id='password']").type("aarti123")
        cy.xpath("//div[@class='interests-div']//div[9]//input[1]").click()
        cy.xpath("//div[@class='genders-div']//div[2]//input[1]").click()
        cy.xpath("//select[@id='state']").select("Goa")
        cy.xpath("//button[@type='submit']").click()

    // User above used details for login
    // Verify user is able to login
    // Click on Logout and verify  user is able to see login page

        cy.xpath("//a[@class='subLink']").click()
        cy.xpath("//input[@id='email1']").type('aarti1@test.com')
        cy.xpath("//input[@id='password1']").type('aarti123')
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//h4[@class='welcomeMessage']").should("contain","Welcome aarti to iNeuron Courses")
        cy.xpath("//button[normalize-space()='Sign out']").click()
        cy.url().should("contain","login")

    })
  
})