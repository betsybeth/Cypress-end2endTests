/// <reference types="cypress"/>
import { loginElements } from "../PageModels/Login"

describe("Table Sorting ", () => {
    beforeEach(() => {
        cy.visit("https://demo.applitools.com/hackathon.html")
        loginElements.userNameInputElement().type("test")
        loginElements.passwordInputElement().type("test")
        loginElements.rememberLabelElement().click()
        loginElements.loginButtonElement().click()

    })

    it(("validate the values in the table are in correct order"), () => {
     
        loginElements.transactionalTableSelector().within(() => {
            cy.get("tr").should("have.length", 7)
            loginElements.amountHeaderSelector().click()
            cy.get("tbody > :nth-child(1)").should("be.visible")
            const transaction = (amount) => {
                return _.map(amont => {
                    
                })
            }

            
        })

          
               
    })

})
