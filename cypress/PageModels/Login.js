/// <reference  types="cypress" />

const loginElements = {
    userNameInputElement: () => cy.get("#username"),
    passwordInputElement: () => cy.get("#password"),
    checkboxElement: () =>  cy.get(".form-check-input"),
    loginButtonElement: ()  => cy.get("#log-in"),
    usernameLabelElement: () =>  cy.get("div:nth-child(1) > label:nth-child(1)"),
    passwordLabelElement: () =>   cy.get("div.form-group:nth-child(2) > label:nth-child(1)"),
    rememberLabelElement: () => cy.get(".form-check-label"),
    logoImageElement: () => cy.get(".logo-w > a:nth-child(1) > img:nth-child(1)"),
    usernameIconElement: () => cy.get(".os-icon-user-male-circle:nth-child(3)"),
    passwordIconElement  : () => cy.get(".os-icon-fingerprint:nth-child(3)"),
    facebookIconElement : () => cy.get("a:nth-child(2) > img:nth-child(1)"),
    twitterIconElement : () => cy.get("div:nth-child(3) a:nth-child(1) > img:nth-child(1)"),
    linkedinIconElement : () => cy.get("a:nth-child(3) > img:nth-child(1)"),
    loginFormHeaderElement: () => cy.get(".auth-header")



 
}

export { loginElements }

