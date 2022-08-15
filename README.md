# WizardCovergo

A take home exercise from covergo. A complete solution is explained in the [solution document](solution.md). Where i have explained about the project tech stuff and functionality.

## What are we building?

- We are building a multi-step form (wizard) where users can fill in information, get price and buy an insurance policy
- **Wireframes** are in Miro: https://miro.com/app/board/o9J_laOKpgA=/?invite_link_id=541065843186

## Requirements:

See in Miro: https://miro.com/app/board/o9J_laOKpgA=/?invite_link_id=541065843186

Page 1
------

-   The first page is a welcome screen

-   User can click on the `Start` button and the wizard would start

Page 2
------

-   We need to collect:

    -   `name`

    -   `age`

    -   `country` (user can select only one of:)

        -   `Hong Kong`

        -   `USA`

        -   `Australia`

-   Each country will represent a particular currency so that the user can see a calculated premium with proper currency. It will be important on the next step where we do premium calculation

    -   `Hong Kong` : `HKD`

    -   `USA` : `USD`

    -   `Australia` : `AUD`

-   User has to choose which `Package` they want, only one of:

    -   `Standard`

    -   `Safe` (it is 50% more expensive than Standard), it should show how much more user has to pay in the selected currency

    -   `Super Safe` (it is 75% more expensive than Standard), it should show how much more user has to pay in the selected currency

-   On this page, user can also see calculated `Premium` in correct currency

    -   Formula for the premium is `10 * Age`

    -   Based on the selected country, premium will be adjusted accordingly based on the rate `10 * Age * Rate`

| **Currency Code**  | **Rate** | **Example** |   |   |
|---------------|------|---------|---|---|
| HKD           | 1    | 100HKD  |   |   |
| USD           | 2    | 200USD  |   |   |
| AUD           | 3    | 300AUD  |   |   |

-   Based on the selected `Package`, premium will be adjusted accordingly, see `Package` options

-   If user `age` is over 100, we direct him to `Page 2 - age error` when clicking on `Next` button

-   Otherwise user can go step back or to the next page

Page 2 - age error
------------------

-   If user clicks on the button, he will be redirected to the Page 1

Page 3
------

-   The final step of the journey where user can see the summary and proceed to buy

-   Buy button lead to Page 1
