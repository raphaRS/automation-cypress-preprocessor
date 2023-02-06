import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import get from "../../../support/serviceExports";

const url = "https://swapi.dev/api/planets";
Given("send request", function () {
  get(url).then((Response) => {
    cy.wrap(Response).as("objResponse");
  });
});

When("i search a planet", function () {
  cy.get("@objResponse").then((res) => {
    cy.wrap(res.body.results).as("results");
    cy.log("Results", res.body.results);
  });
});

Then("i get a planet Tatooine", function () {
  cy.get("@results").then((when) => {
    expect(when[0].name).to.be.eql("Tatooine");
    cy.log("Name of PLanet", when[0].name);
  });
});

And("Status code 200", function () {
  cy.get("@objResponse").then((res) => {
    expect(res.status).to.be.eql(200);
    cy.log("Status code", res.status);
  });
});
