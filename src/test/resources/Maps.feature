Feature: Multi line data table
Scenario: Execution of Data Table
Given I am able to access gmail page
And I click on Directions
When I update the Destinations as
|chennai|
|pune|
|mumbai|
|delhi|
|hyderabad|
Then I should get the total distance as 1900 km