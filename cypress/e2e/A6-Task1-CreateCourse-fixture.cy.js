/* Create course using cypress with data from fixture

Precondition – Create json file “CourseData.json” and store all test data which is needed. */

describe('Create course with data from fixture', function() {

    beforeEach(function() {
        
        cy.fixture("courseData").then(function(jsondata)
        {
            this.jsondata = jsondata
        })
        
    });

    // Create custom command login which will accept username and password then perform login functionality. 
    it('create course', function () {

        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get('[name="email1"]').type(this.jsondata.username).should("have.value" , this.jsondata.username)
        cy.get('[name="password1"]').type(this.jsondata.password).should("have.value", this.jsondata.password)
        cy.contains("Sign in").should("be.enabled").click()
        cy.wait(5000)
        
        // Mouse Hover on Manage
        cy.contains("Manage").realHover()
        
        //Click on Manage Course
        cy.contains("Manage Courses").click()
        cy.wait(5000)
        cy.get("body").realHover({ position: "topLeft" });
        cy.wait(2000)
        
        // Click on Add New Course
        cy.contains("Add New Course ").click()
        
        // Do not fill any values and click on Save
        cy.xpath("//button[@class='action-btn']").click()

        // Verify error message “Please select a thumbnail!”
        cy.get(".errorMessage").should('contain',"Please select a thumbnail!")

        // Upload any file from fixture folder
        cy.get("#thumbnail").attachFile("image.jpeg")

        // Enter course name, description
        cy.get("#name").type(this.jsondata.courseName).should("have.value", this.jsondata.courseName)
        cy.get("#description").type(this.jsondata.courseDescription).should("have.value", this.jsondata.courseDescription)

        // Type your name as INSTRUCTOR 
        // Note- use delay as argument to type slow use delay of 1000 ms
        cy.get("#instructorNameId").type("Aarti Gholam",{delay : 1000})

        // Set price 200
        cy.get("#price").clear().type(this.jsondata.price).should("have.value",this.jsondata.price)
        
        // Select start date 
        cy.xpath("//input[@name='startDate']").click()
        cy.xpath("(//div[@class='react-datepicker__week'])[2]/div[2]").click()
        
        // Select end date
        cy.xpath("//input[@name='endDate']").click()
        cy.xpath("(//div[contains(@class,'react-datepicker__week')])[5]/div[7]").click()

        // Click on category as Testing
        cy.contains("Select Category").click()
        cy.xpath("//button[text()='Testing']").click()

        // Click on Save
        cy.contains("Save").click()
        cy.wait(10000)
        cy.scrollTo("bottom")
        cy.wait(5000)

        // Verify course added in the list
        
        cy.xpath("//table[@class='courses-table table table-borderless']//tbody").contains("Cypress Testing").should("have.text",this.jsondata.courseName)

        // Select the same course and click on delete
        cy.xpath("//table[@class='courses-table table table-borderless']//tbody//tr[last()]").contains("Delete").click()

        cy.wait(15000)
        cy.scrollTo("bottom")
        cy.wait(5000)

        // Verify course deleted from the list
        cy.xpath("//table[@class='courses-table table table-borderless']//tbody").should("not.contain.text",this.jsondata.courseName)

    });
    
});

