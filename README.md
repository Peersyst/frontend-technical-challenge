# 🖥 Peersyst Frontend Technical Challenge

This is the challenge that frontend engineer applicants will have to face as a part of the hiring process at Peersyst. The idea is to make as much progress as possible under a given time constraint (4 hours).

## Summary

You will have to implement a simplified version of the account page found in the official [XRPL explorer](https://livenet.xrpl.org/accounts/rSCXRaUyg9CkzHMidE7oYETB4W2bM2se7) **using React**.
We'll also add some tweaks to it, just to make it a bit fancier.

We provide you with a very simple craco based project with the essential tools to get you started. Notice that everything is done with vanilla React and CSS. This way, you will not be influenced by our code. We want you to be proactive and take decisions, so feel free to change everything you need!

## Clarifications

First of all, for the header part, you should include the address and XRP balance. You don't have to implement the "ACCOUNT INFO" section, as it includes more especific concepts of XRPL, such as the "reserve" or "current sequence".

Secondly, we'll put the focus on the tabs. As you can see on the [transactions tab](https://livenet.xrpl.org/accounts/rSCXRaUyg9CkzHMidE7oYETB4W2bM2se7/transactions), there are a lot of transaction types.
For this challenge, we will ask you to show **payments only**.
This list does not have to be paginated, but you will get extra points if you do it.
Each payment in the list will have to show the following fields:

-   Account
-   Transaction type
-   Status
-   Date/Time
-   Amount
-   Currency
-   Receiver

Nevertheless, we encourage you to create an extendable _Transaction_ component, as we might want to introduce other transaction types in the future. The way we prefer it, is by building a _Transaction_ component that accepts different props depending on the type of the transaction.
For example, a transaction of type "Payment" will require an _Amount_ field, while a transaction of type "NFTokenMint" will not. On the other hand, you won't be asked to implement the [assets tab](https://livenet.xrpl.org/accounts/r3RaNVLvWjqqtFAawC6jbRhgKyFH7HvRS8/assets/issued). Nonetheless, you will have to include it on the tabs next to transactions, but you can leave that tab empty. Keep in mind that there might be more scenarios where we want to use tabs, thus it is quite important to make them reusable.

To make it more interesting, we will ask you to include a search bar that allows the user to navigate to other account pages. We already did some work building the bases of the search bar, so you can focus on adding the search functionality.

Finally, you will have to add a caching system that saves the state of the last account page visited.
You can use the local storage of the browser for that.
This way, it won't be necessary to refetch all the information when the browser is reopened.
If there is no cached value you can load the account page of the following address by default _rSCXRaUyg9CkzHMidE7oYETB4W2bM2se7_.

## Requirements

-   Typescript is mandatory
-   Use the xrpl library to fetch all the necessary data from the XRPL blockchain. You can find its documentation [here](https://js.xrpl.org/index.html) and [here](https://xrpl.org/concepts.html). Notice that we give you an initial implementation of an `XrplService` so you don't have to work out how its initialization works.
-   You are allowed to use any library, apart from React
-   You have to implement the Tabs component by yourself
-   The UI has to have a certain level of responsiveness

## Extras

Do not tackle this unless you have time left.

-   Paginated transactions list (load more button, infinite scroll, etc)
-   Loading behaviours (skeletons, spinners, etc)
-   Empty states
-   Not found page
-   Some unit testing (up to you)
-   Search bar validation (xrpl address validation)

## Work environment

To start working with the project we provide you can follow the following instructions:

-   Install the depencendies with `npm i`
-   Start the project in development mode with `npm run start`

## Evaluation

-   Try to respect the time limit
-   **Quality over quantity:** better half of the features 100% done than all of the features 50% done
