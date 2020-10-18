@End2End
Feature: User should be able to login in techfios site

Background:
	Given user is on the techfios site

@Scenario1
Scenario:
	When User enters username as "demo@techfios.com"
	When User enters password as "abc123"
	And User click on login button
	Then User should be able to see the dashboard page

@Scenario2	
Scenario Outline:User should be able to login with valid credentials
	When User enters "<username>" and "<password>"
	And User click on login button
	Then User should be able to see the dashboard page
Examples:
|username|password|
|demo@techfios.com|abc123|

@Scenario3	
Scenario Outline: user with invalid credencials 
	When User enters "<username>" and "<password>"
	And User click on login button
	Then User should not be able to see the dashboard page
Examples:
|username|password|
|demo@techfios2.com|abc124|

@Scenario4	
Scenario Outline:
	When User enters "<username>" and "<password>"
	And User click on login button
	Then User should be able to see the dashboard page
Examples:
|username|password|
|demo@techfios.com|abc123|
|demo@techfios2.com|abc124|