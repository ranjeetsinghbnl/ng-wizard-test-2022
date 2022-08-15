# Covergo Wizard Home Test

This is a solution I have designed for Covergo home test. The specification and requirements are listed in the [document](README.md).

**I chose Angular for this solution. Why?**
- As per my understanding, this is going to be an enterprise application(covergo). Where we have different modules for admin users and other users. When it comes to enterprise applications Angular have several advantages, in terms of the development life cycle of the project. Although this topic can be really long and demands a good discussion within the team.
- On the backend we can use nest.js framework, to have one monolith architecture. Nest.Js concepts are built on the Angular architecture, so it will be better paired with angular to have the same common code base.

**Alternatives Approaches**
- Use Nuxt or NextJs for making the premium purchase widget as a landing page. That has a different copy, if vendors are selling premiums. Other Admin and related modules will be built in Angular.
- Use micro fronted, where landing pages will use VueJs(nuxt - helped with SEO and SSR) and Angular for building the admin and client dashboard.
- Use web components, using stencilJs, lit-html for generating this premium purchase application as a standalone app. That can be embedded anywhere, similar to facebook comments widget.

## Tech Stack ⚙️
- Angular - 14
- Prettier, Unit test(jasmine)
- Husky
- Linting

## Styling 💀
- SCSS
- Tailwind CSS
- Poppins Google Font

## Folder Structure 🗄️
The code is organized in the following folder structure as shown and explained below.

```
 src
    ├── app
    │   ├── base
    │   ├── configs
    │   ├── modules
    │   │   └── finance
    │   │       ├── pages
    │   │       │   ├── finance-details
    │   │       │   ├── finance-error
    │   │       │   ├── finance-summary
    │   │       │   └── get-start
    │   │       └── services
    │   └── services
    ├── assets
    ├── environments
    └── theme
```

#### Finance Module

It's the main module of the application, where the actual logic is implemented.

Path

```
src -> app -> modules -> finance -> page
```

`Finance Module`

- `get-start` - Page 1 showing get started screen
- `finance-details` - Page 2 Get user details for generating a premium
- `finance-summary` - Page 3 Showing user details and summary for chosen premium
- `finance-error` - Error page, SHowed when user age is more than 100


### Configs and Base
Base component(parent class for all the components) and constants used in the application.

I have defined the Country, Plans and other related configs that can be dynamically loaded via API or via static configurations.


### Services

Contains local storage and title service, responsible for storing temporary premium details to show on summary page and title for managing the application title respectively.

There is one more service as a part of the `Finance Module` responsible for
- Getting country and currency details
- Getting all available premium plans
- Calculating total premium
- Calculating extra amount for each plan, which the user needs to pay.

### Theme 💀

Responsible for making applications look great. I have defined the tailwind base import in the main style file.


## Improvements
- Code documentation.
- Tailwind own custom theme.
- More test cases, I only added the major ones.
- SEO improvements to have tags
- Google analytics events tags with tag manager to track the behavior. 
- Save user filled data, when the user clicks on the back button from the premium summary page to track the activities.
- API for fetching all the details dynamically.


## Getting Started 🚀
To start using this boilerplate, clone this repo to a new directory:

```bash
git clone https://github.com/ranjeetsinghbnl/ng-wizard-test-2022
```
and run:

```bash
npm install
```

## Usage 🚊

To start a project, run:
```bash
ng serve
```

To build the app for production, run:

```bash
ng build --prod
```

To run the unit tests once, run:

```
ng test
```

To run the linting, run:

```
ng lint
```


#### Contact 📧 

📩 <a href="mailto:ranjeetsingh.bnl@gmail.com">ranjeetsingh.bnl@gmail.com</a>

🐦 Twitter [@ranjeetsingh_bl](https://twitter.com/ranjeetsingh_bl)

💼 Linkedin [@ranjeetsinghbnl](https://www.linkedin.com/in/ranjeetsinghbnl)




