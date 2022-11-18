// Task 1- Create category using cypress with data from fixture

// Precondition – Create json file “CourseCategor.json” and store category name which is needed for below test.

describe('Create category using cypress with data from fixture', function(){

    this.beforeEach(function(){

        cy.fixture('CourseCategor').then(function(jsondata){

            this.jsondata = jsondata
        })
    })

// Create custom command login which will accept username and password then perform login functionality. Create another custom command for logout as well.

it('create course category', function(){

    cy.visit("https://ineuron-courses.vercel.app/login")
    cy.login('ineuron@ineuron.ai','ineuron')

// Mouse Hover on Manage
    cy.contains("Manage").realHover()
      
// Click on Manage Category
    cy.contains("Manage Categories").invoke("removeAttr", "target").click({ force: true })
    cy.wait(5000)
    cy.get("body").realHover({ position: "topLeft" });
    
// Click on Add New Category
   
    cy.window().then((win) => {
        
    cy.wait(10000)
    cy.contains("Add New Category").click()
    cy.stub(win, "prompt").returns("Cypress Automation Testing")
})
// Verify Category as been added 
    cy.contains("Cypress Automation Testing").should("be.visible")

// Click on Logout (use custom command)
    cy.logout()
    })
})