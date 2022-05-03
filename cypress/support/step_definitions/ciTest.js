import { When, Then } from "cypress-cucumber-preprocessor/steps";

When ('the user is on google page', () => {
	cy.visit("https://www.google.com")
});

Then('the user sees google search button', () => {
	cy
    .get('[aria-label="Google Search"]')
    .should('be.visible');
});