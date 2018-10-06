@Tag1
Feature: Login Test
This fetaure talks about the positive and negative login scenarios

Background:
Given I am able to access magento webpage

@Tag2
Scenario: Successful login scenario
When I update the username as "natarajan.ramanathan93@gmail.com"
And I update the password as "Welcome123"
And I click on the login button
Then I should find the magento id as "ID: MAG003417822"

@Tag3 @Tag4
Scenario Outline: Invalid Login
When I update the username as "<user>"
And I update the password as "<pwd>"
And I click on the login button
Then I should see error as "Invalid login or password."
Examples:
|user										|pwd				|	
|test1.user1@gmail.com	|password1	|
|test.user@gmail.com		|password2	|

Scenario: Add customer
Given I am able to access the webpage
When I update the user name as "xyz"
And I update the password as "abc"
And I update the customer detail
|name1|address1|number1|
|name2|address2|number2|
|name3|address3|number3|
