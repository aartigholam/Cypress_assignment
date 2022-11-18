// Create 5 user using data driven test in Cypress

// Create 5 json file user1.json, user2.json etc.
// Store all user information which is required to create user.
// Please use different data in each fixture file.
// Same script will be used to create 5 users. 

const dataFixture = [

    { "name" : "user1","context" : "1" },
    { "name" : "user2","context" : "2" },
    { "name" : "user3","context" : "3" },
    { "name" : "user4","context" : "4" },
    { "name" : "user5","context" : "5"}
]

describe("Create new user and login with same user",function(){

dataFixture.forEach(function(fixtureData){
    
    describe(fixtureData.context, function(){

        before(function(){
            cy.fixture(fixtureData.name).then(function(testData){
                this.testData = testData
            })           
        })
    
    it("Create new user",function() {
// Open https://ineuron-courses.vercel.app/
        cy.visit("https://ineuron-courses.vercel.app/")

// Click on Login Button
        cy.contains("Log in").click()

// Click on New User link (use contains method)
        cy.contains("New user? Signup").click()
        cy.contains("Sign up").should("be.disabled")

/*Enter Name, Email, Password
Select testing from checkbox
Select Gender
Select any State 
Click on Sign up */

        cy.reg(this.testData.uname,this.testData.uemail, this.testData.upassword)

    // User above used details for login
    // Verify user is able to login

        cy.login(this.testData.uemail,this.testData.upassword)
    
    
    // Click on Logout and verify  user is able to see login page

        cy.logout()

      })
    })
  })
})

