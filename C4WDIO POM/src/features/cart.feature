Feature: saucedemo Login Page
  In order to purchase a product
  As a user 
  I want to add a product to my shopping cart

  Scenario: As a user, I can add a product to my shopping cart

    Given user on the saucedemo login page
    When  user login with <username> and <password>
    And   user Change filter to <filterOption>
    And   user click Add to cart for product <productName>
    Then  shopping cart increased by 1
    When  user is able to go to cart
    Then  user is able to see product in shopping cart
    When  user is able to remove item

    Examples:
      | username     | password     | productName       | filterOption         |
      | problem_user | secret_sauce | Sauce Labs Onesie | Price (low to high)  |
