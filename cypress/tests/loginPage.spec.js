/// <reference  types="cypress" />
import   { loginElements }   from "../PageModels/Login"


describe("Verify all elements in the loginPage are displayed", () => { 
    beforeEach(() =>  {
        cy.visit("https://demo.applitools.com/hackathon.html")
    })
    it("Verify labels are displayed", () => {
         loginElements.usernameLabelElement()
         .should("be.have.text", "Username")
         .should("be.visible")

         loginElements.passwordLabelElement()
         .should("be.have.text", "Password")
         .should("be.visible")
         
         loginElements.rememberLabelElement()
         .should("be.have.text", "Remember Me")
         .should("be.visible")

         loginElements.userNameInputElement().should("have.attr", "placeholder", "Enter your username")
         loginElements.passwordInputElement().should("have.attr", "placeholder", "Enter your password")
    })

    it("verify all login fields are present", () => {

        loginElements.usernameIconElement().should("be.visible")
        loginElements.passwordIconElement().should("be.visible")
        loginElements.logoImageElement().should("be.visible")
        loginElements.loginFormHeaderElement()
           .should("be.have.text", '\n        Login Form\n      ')
           .should("be.visible")
       loginElements.facebookIconElement().should("have.attr", "src", "img/social-icons/facebook.png")
       loginElements.linkedinIconElement().should("have.attr", "src", "img/social-icons/linkedin.png")
       loginElements.twitterIconElement().should("have.attr", "src", "img/social-icons/twitter.png")
        
    })

})

describe("Data-driven Tests", () => {
    beforeEach(() => cy.visit("https://demo.applitools.com/hackathon.html"))

     it("Validate Loggin into ACME demo App" ,  () => { 
        loginElements.userNameInputElement().type("test")
        loginElements.passwordInputElement().type("betsy")
        loginElements.checkboxElement().click()
        loginElements.loginButtonElement().click()
        cy.request({
            url: 'https://demo.applitools.com/hackathonApp.html',
            followRedirect: true
        }).then((resp)  => {
            expect(resp.status).to.eql(200)
        })

    })
}) 




