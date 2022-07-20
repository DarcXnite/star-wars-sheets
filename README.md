# Star Wars Character Sheets

## See it live [Here!](https://62d6fd69b37fce05fc6ee543--stellar-smakager-1871e6.netlify.app/)

## Project Description

This project is based on Star Wars roleplaying game from fantasy flight games([Source](https://www.fantasyflightgames.com/en/starwarsrpg/)). This eliminates the use of pencil and paper from play sessions, and you'll be able to digitize your character sheets and bring them anywhere you go. This is largely beneficial for sessions that rotate between remote sessions and in-person sessions.

Think Dungeons & Dragons character sheets, but translated for the use in Star Wars RPG.

## Collaborators

[Davis Nguyen](https://github.com/DarcXnite) | [Grace Narez](https://github.com/gracenarez333)

## Tech Stacks

- MongoDb
- Express.js
- React
- Node.js

## Approach

## Installation Instructions

## RESTful Routing Chart

<details>

![RESTful routing chart](./images/RESTful-routes.jpeg)

</details>

## Installation Instructions

1. Fork and clone this repo along with the [backend server](https://github.com/DarcXnite/star-wars-sheets-server)
2. Run `npm i` to install all dependencies for both the server and client side.
3. Create a `.env.local` file in the client side. Add a `REACT_APP_SERVER_URL` environment variable into that file. This is our local server URL.
4. Create a `.env` file in the server side. Add a `JWT_SECRET` environment variable to this file.
5. Run `npm start` in the client and `nodemon` in the server side to get the app running.

## Approach

We began this project by planning a rough MVP and user stories, while also brainstorming possible stretch goals that we could work on once the basic functionality was completed. This brainstorming aided in the easy implementation of the backend and how the data would be stored with the user in mind.

To keep each other on track throughout the week, we stayed in communication and utilized live share to do paired coding during work times.

After the planning, we began working on the backend starting with the database schemas and code to hangle requests from the client. After completing and testing all routes and schemas through postman and confirming functionality, we started on the frontend.

Starting with as basic functionality as we could. We added CRUD functionality to all necessary components. After this, we were able to soley work on styling and small bug fixes and tweaks.

## Wireframes

<details>
<summary>
==>
</summary>

![Login/Home Page](./images/wireframes/login.png)
![Register Page](./images/wireframes/register.png)
![Profile/Characters Page](./images/wireframes/profile.png)
![Characters Stats](./images/wireframes/stats.png)
![Character Info](./images/wireframes/characterInfo.png)
![General Skills](./images/wireframes/generalSkills.png)
![Combat Skills](./images/wireframes/combatSkills.png)
![Knowledge Skills](./images/wireframes/knowledgeSkills.png)
![Custom Skills](./images/wireframes/customSkills.png)
![Weapons](./images/wireframes/weapons.png)
![Crit Injuries](./images/wireframes/criticalInjuries.png)
![Force Powers](./images/wireframes/forcePowers.png)
![Talents](./images/wireframes/talents.png)
![Inventory](./images/wireframes/inventory.png)
![Armor](./images/wireframes/armor.png)
![Cybernetics](./images/wireframes/cybernetics.png)
![Tools](./images/wireframes/tools.png)
![Notes](./images/wireframes/notes.png)

</details>

## User Stories

- [x] As a user, I want to be able to log in and out while keeping characters saved
- [x] As a user, I want to be able to create multiple characters
- [x] As a user, I want to be able to build my skills
- [x] As a user, I want to take notes
- [x] As a user, I want to keep track of all my stats
- [x] As a user, I should be able to choose my careers
- [x] As a user, I want to be able to save character instances
- [x] As a user, I want to have the ability to complete full CRUD on characters

## Goals

### MVP

- [x] Create back-end for character sheet saving
- [x] Create account and delete account
- [x] Create user log-in and log-out
- [x] Create page 1 (Character name, desc, motivations, stats)
- [x] Create page 2 (Careers & skills)
- [x] Create page 3 (Combat)
- [x] Create page 4 (Inventory)
- [x] Create page 5 (Notes)
- [x] Style character sheets

### Stretch

- [ ] Allow user to change color schemes (light side, or dark side)
- [ ] Dice rolling
- [ ] Make it for mobile

### Potential Roadblocks

- No forseeable potential roadblocks at this time.

## Hurdles

- Handling all components without getting lost or losing code
- Functionality for nested embedded references in backend schemas
