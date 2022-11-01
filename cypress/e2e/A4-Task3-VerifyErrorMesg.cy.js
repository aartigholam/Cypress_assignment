// Task 3- Write 4 test in same suite for verifying error message
describe("Login suite to Verify Error messages",()=>{
   
    // runs before every test block    
    beforeEach(() => {
            cy.visit("https://ineuron-courses.vercel.app/login")
         })
        
    // Test 1- Do not enter username and password and click on login button
        it("Verify error message should contains “Email and Password is required”",()=>{
        
            
            cy.get("#email1").type('{backspace}')
            cy.get("#password1").type('{backspace}')
            cy.get("button[type='submit']").click()
            cy.get(".errorMessage").should("contain","Email and Password is required")
        })
    
    // Test 2- Enter username and do not enter password and click on login button
        it("Verify error message should contains “Password is required”",()=>{
        
            cy.get("#email1").type("ineuron@ineuron.ai")
            cy.get("#password1").type('{backspace}')
            cy.get("button[type='submit']").click()   
            cy.get(".errorMessage").should("contain","Password is required")
        })
    
    // Test 3- Enter password and do not enter username and click on login button
        it("Verify error message should contains “Email is required”",()=>{
            
            cy.get("#email1").type('{backspace}')
            cy.get("#password1").type('ineuron')
            cy.get("button[type='submit']").click()
            cy.get(".errorMessage").should("contain","Email is required")
        })
    
    // Test 4- Enter wrong username and wrong password and click on login button
        it("Verify error message should contains USER Email Doesn't Exist",()=>{
        
            cy.get("#email1").type("admin@test.com")
            cy.get("#password1").type("asdfsfd")
            cy.get("button[type='submit']").click()
            cy.get(".errorMessage").should("contain","USER Email Doesn't Exist")
        })
    
    })