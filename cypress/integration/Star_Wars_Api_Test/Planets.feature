
Feature: I want to send api request and get planets of star wars
Scenario: Send api request to get a Tatooine
    Given send request of planet
    When i search a planet
    Then i get a planet Tatooine
    And status code 200

Scenario: Send api request to get terrain in Tatooine
    Given send request api of planet Tatooine
    When i search a terrain
    Then i get type terrain
    And status code 200

Scenario: Send API request to get a climate in Tatooine
    Given send request api planet
    When i get planet Tatooine
    Then i get type of climate in Tatooine
    And status code 200

