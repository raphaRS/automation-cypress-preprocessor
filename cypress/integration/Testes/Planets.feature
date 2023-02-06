
Feature: I want to send api request and get planets of star wars
Scenario: Send api request to get a planet
    Given send request
    When i search a planet
    Then i get a planet Tatooine
    And Status code 200