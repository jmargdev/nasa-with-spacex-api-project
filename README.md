<h1 align="center">Nasa Project with SpaceX API</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/jmargdev/nasa-with-spacex-api-project?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/jmargdev/nasa-with-spacex-api-project?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jmargdev/nasa-with-spacex-api-project?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/jmargdev/nasa-with-spacex-api-project?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/jmargdev/nasa-with-spacex-api-project?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/jmargdev/nasa-with-spacex-api-projectoject?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/jmargdev/nasa-with-spacex-api-project?color=56BEB8" /> -->
</p>

<!-- Status -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <!-- <a href="#memo-license">License</a> &#xa0; | &#xa0; -->
  <a href="https://github.com/jmargdev" target="_blank">Author</a>
</p>

<br>

## About

A Node.js project that utilizes the SpaceX API, built with the technologies listed below.

## Technologies Used

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [MongoDB](https://github.com/mongodb/mongo)
- [Mongoose](https://mongoosejs.com/)
- [Jest](https://jestjs.io/)

## Requirements

- Before starting :checkered_flag:, you must have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.
- Create a free [Mongo Atlas](https://www.mongodb.com/cloud/atlas/) account or use a local MongoDB database.

## Getting Started

```bash
# Clone this project
$ git clone https://github.com/jmargdev/nasa-with-spacex-api-project

# Change into the project directory
$ cd nasa-with-spacex-api-project

# Rename server/.env.example to server/.env and add your MongoDB database connection string

# Install client/server dependencies
$ npm run install

# Running the project
$ npm run deploy

# Browse to the frontend at http://localhost:8000 to schedule your next space mission!
```

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t nasa-project .`
3. Run `docker run -it -p 8000:8000 nasa-project`

## Running the Tests

To run any automated tests, run `npm test`. This will:

- Run all the client-side tests: `npm test --prefix client`
- Run all the server-side tests: `npm test --prefix server`

<!-- ## :memo: License -->

<!-- This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file. -->

Made with :heart: by <a href="https://github.com/jmargdev" target="_blank">John Margaronis</a>

&#xa0;

<a href="#top">Back to top</a>
