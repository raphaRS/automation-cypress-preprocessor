import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import get from "../../../support/serviceExports";

const url = 'https://swapi.dev/api/planets'
Given('hello', function() {
  get(url).then(Response =>{
    cy.wrap(Response).as("results")
  })
})

When('i search a planet', function(){
cy.get("@results").then(res => {
  const planet = res.body.results;
})
})

Then('i get a planet Tatooine', function(){

})
