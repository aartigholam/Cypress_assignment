describe("Steps to set up mocha awesome report",()=>{
  it('Setup Mocha awesome report', () => {
    cy.log("Steps to set up mocha awesome report")    
  });
})


/*
======================
Task 1- Setup Report 
======================

=> (1) Setup mocha awesome report in current project :

ANS :
    ------------------------------------------------------------------------------------------------
    -> Steps to setup mocha awesome report :

    -> a) Run npm i --save-dev cypress-mochawesome-reporter command in current Project.
    Which will add  "cypress-mochawesome-reporter": "^3.2.3", dev dependancy in 'package.json' file

    -> b) Add following setup hook in 'cypress.config.js' file

    const { defineConfig } = require('cypress');

    module.exports = defineConfig({
      reporter: 'cypress-mochawesome-reporter',
      e2e: {
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
        },
      },
    });

    -> c) Add import 'cypress-mochawesome-reporter/register'; in 'e2e.js' file

------------------------------------------------------------------------------------------------

=> (2) Report should open automatically after execution
ANS :

    Add flag in reporterOptions: in 'cypress.config.js' file : autoOpen: false 

------------------------------------------------------------------------------------------------

=> (3) Code should not be visible in report
ANS :

    Add flag in reporterOptions: in 'cypress.config.js' file : code: false 

------------------------------------------------------------------------------------------------

=> (4) Add date time stamp in report
ANS :

    Add options in 'cypress.config.js' file under reporterOptions :

    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "mmddyyyy_HHMMss"
    

------------------------------------------------------------------------------------------------

=> (5) Add retries option in 'cypress.config.js' file :
ANS :

    Add retry feature in cypress config runMode 2, open Mode 1
    retries :{
          runMode: 2,
          openMode: 1 
        }

------------------------------------------------------------------------------------------------
*/





