import { expect } from "chai";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import get from "../../../support/serviceExports";

const url = "https://swapi.dev/api/planets";

//Funcões//
//.wrap() armazena o conteudo de um elemento
//.then() extrai o conteudo do elemento
//.as() fornece um nome do elemento para uso posterior
//expect() recebe o elemento que será comparado
// .to.be.eql()  valida se o valor recebido no expect é igual ao esperado no equal

//Scenario: Send api request to get a Tatooine
Given("send request of planet", function () {
  get(url).then((response) => {
    cy.wrap(response).as("objResponse"); 
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
    cy.log("Name of Planet", when[0].name);
  });
});

And("status code 200", function () {
  cy.get("@objResponse").then((res) => {
    expect(res.status).to.be.eql(200);
    cy.log("Status code", res.status);
  });
});
//Scenario: Send api request to get terrain in Tatooine
Given("send request api of planet Tatooine", function () {
  get(url).then((Response) => {
    cy.wrap(Response).as("objResponse");
  });
});

When("i search a terrain", function () {
  cy.get("@objResponse").then((res) => {
    cy.wrap(res.body.results).as("results");
    cy.log("Results", res.body.results);
  });
});

Then("i get type terrain", function () {
  cy.get("@results").then((when) => {
    expect(when[0].terrain).to.be.eql("desert");
    cy.log("Terrain of planet", when[0].terrain);
  });
});

And("status code 200", function () {
  cy.get("@objResponse").then((res) => {
    expect(res.status).to.be.eql(200);
    cy.log("Status code", res.status);
  });
});

//Scenario: Send API request to get a climate in Tatooine
Given("send request api planet", function () {
  get(url).then((response) => {
    cy.wrap(response).as("objResponse");
  });
});

When("i get planet Tatooine", function () {
  cy.get("@objResponse").then((res) => {
    cy.wrap(res.body.results).as("results");
  });
});
Then("i get type of climate in Tatooine", function () {
  cy.get("@results").then((when) => {
    expect(when[0].climate).to.be.eql("arid");
  });
});

And("status code 200", function () {
  cy.get("@objResponse").then((res) => {
    expect(res.status).to.be.eql(200);
    cy.log("Status code", res.status);
  });
});
