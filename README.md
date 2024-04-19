# Playwright Automation Project

This repository contains a series of automated tests for Demoblaze using Playwright.

## Prerequisites

Before you start, ensure you have the following installed on your system:
- Node.js (LTS version recommended)
- npm or Yarn
- A compatible web browser (Chrome, Firefox, or WebKit)

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FGGentile/QATASK.git
   cd QATASK
   ```
2. Install dependecies:
   ```bash
   npm install
   ```
3. Install Playwright browsers (if not already installed):
   ```bash
   npx playwright install
   ```
### Running Tests
To run automated tests, use the following command:

```bash
   npx playwright test
 ```
You can also run tests for a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test cases
| Test Case ID | Description                        | Setup                                               | Steps                                                                                                                                                                                                                                          | Expected Result                                                                                      | 
|--------------|------------------------------------|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| TC1          | Verify Login                       | Open the browser and navigate to the Demoblaze site | 1. Click on the "Login" link to open the login modal.<br>2. Enter a valid username: `admin`<br>3. Enter a valid password: `admin`<br>4. Click on the "Log in" button.                                                                          | User is redirected to the homepage or a welcome message appears. Login link changes to Logout link. | 
| TC2          | Verify Login with empty credentials| Open the browser and navigate to the Demoblaze site | 1. Click on the "Login" link to open the login modal.<br>2. Leave username and password blank <br>3. Click on the "Log in" button.                                                                                                            | An alert message is displayed "Please fill out Username and Password." | 
| TC3          | Verify Login with invalid password| Open the browser and navigate to the Demoblaze site | 1. Click on the "Login" link to open the login modal.<br>2. Enter a valid username: `admin`.<br>3. Enter an invalid password: `wrong`.<br>4. Click on the "Log in" button.                                                                    | An alert message is displayed "Wrong password." | 
| TC4          | Verify Login with empty credentials| Open the browser and navigate to the Demoblaze site | 1. Click on the "Login" link to open the login modal.<br>2. Enter an ivalid username: `wrong`.<br>3. Enter an invalid password: `wrong`.<br>4. Click on the "Log in" button.                                                                 | An alert message is displayed "User does not exist." | 
| TC5          | Verify Categories Existence        | Open the browser and navigate to the Demoblaze site | 1. Review the list of categories typically shown in a sidebar or specific section on the homepage.                                                                                                                                             | Visible list of categories such as Phones, Laptops, and Monitors.                                    | 
| TC6          | Purchase a Product                 | Ensure the user is logged in and open the homepage. | 1. Navigate to a product category (e.g., Phones).<br>2. Click on a product (e.g., "Samsung Galaxy S6").<br>3. Click the "Add to cart" button.<br>4. Navigate to the Cart.<br>5. Click the "Place order" button.<br>6. Complete and submit the form. | Confirmation message with order ID and amount spent appears after purchase.                          |
| TC7          | Modify User Personal Data          | Ensure the user is logged in and open the settings. | 1. Navigate to user profile or settings page.<br>2. Enter new values for user details (e.g., name, email, password).<br>3. Click on the "Save" or "Update" button.                                                                                | Changes are saved successfully. Message indicating successful update is displayed.                  |

## Informe sobre requerimiento faltante

### Blocker Incident Report:<br> Absence of modify personal data <br>
#### Prepared by: <br>Franco Gentile <br>
#### Date:<br> 19/4/2024 <br>
#### Project:<br> Demoblaze <br>

#### Summary
During the testing phase of Demoblaze, the absence of the feature to modify the User personal data previously specified in the original requirements was identified. This issue represents a significant blocker to proceeding with subsequent phases of the project and could negatively impact customer satisfaction.

##### Situation Description
##### Missing Feature:<br> User personal data.<br>
##### Associated Requirement:<br> Task #1, specifies that users should be able to modify their personal data<br>
##### Current Observation:<br> The user personal data modifyfunctionality is not implemented in the current version of the system.<br>
##### Potential Impact
The lack of this functionality prevents users from effectively managing their data, which could lead to low system adoption and negative feedback from customers, affecting the project's reputation.
