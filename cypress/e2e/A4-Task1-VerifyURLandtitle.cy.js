// Task 1 – Verify URL and title
// Open https://ineuron-courses.vercel.app/login

// Verify title contains Courses 
// Verify url contains login

/// <reference types="cypress" />

describe("Verify URL and Title",()=>{
   
    it("Verify title contains Courses",()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")

        cy.get("title").should("contain","Courses")
        cy.url().should("contain",'login')
    })
})


