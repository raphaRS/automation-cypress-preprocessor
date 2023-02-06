import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import get from "../../../support/serviceExports";

const url = "https://swapi.dev/api/planets";
Given("send request", function () {
  get(url).then((Response) => {
    cy.wrap(Response).as("results");
  });
});

When("i search a planet", function () {
  cy.get("@results").then((res) => {
    cy.wrap(res.body.results).as("fullBody");
    cy.log("Teste", res.body.results);
  });
});

Then("i get a planet Tatooine", function () {
  cy.get("@fullBody").then((when) => {
    expect(when[0].name).to.be.eql("Tatooine");
    cy.log("Resp", when[0].name);
  });
});

And("Status code 200", function(){
  cy.get("@results").then((res) => {
    expect(res.status).to.be.eql(200);
    cy.log("res", res.status)
  })
})
