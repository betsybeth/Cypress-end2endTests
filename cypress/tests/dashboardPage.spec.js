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
          })
                    
    })
})

describe("Canavas Tests", () => {
    beforeEach(() => {
        cy.visit("https://demo.applitools.com/hackathon.html")
        loginElements.userNameInputElement().type("test")
        loginElements.passwordInputElement().type("test")
        loginElements.rememberLabelElement().click()
        loginElements.loginButtonElement().click()

    })
    it("validate chart view", () => {
         loginElements.compareExpensesLink().click()
         cy.request({
            url: 'https://demo.applitools.com/hackathonChart.html',
            followRedirect: true
        }).then((resp)  => {
            expect(resp.status).to.eql(200)
        })
        //  Unable to test the canvas chart since the elements are not available in the DOM element
    })
})

describe("Dynamic Content Test", () => {
    beforeEach(() => {
        cy.visit("https://demo.applitools.com/hackathon.html")
        loginElements.userNameInputElement().type("test")
        loginElements.passwordInputElement().type("test")
        loginElements.rememberLabelElement().click()
        loginElements.loginButtonElement().click()

    })
    it("validate Adverts are displayed" , () => {
        loginElements.totalBalanceDivSelector().should("be.visible")
        loginElements.creditAvailableSelector().should("be.visible")
        loginElements.dueTodaySelector().should("be.visible")
       
    })
})

