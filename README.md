# AllMart Backend
Example Node.js backend project for PanamaDevs Meetup.

# Installation

To install the project and its dependencies:

- Clone it from the repository to get a local copy.
- Run `npm install` to install the dependencies.

# Usage

## Development

### Running the project

#### Standalone

To start the project, simply run [npm run start](#npm-start) (or `npm start`) to boot a local server. Once it's up and ready, you may reach the API via [http://localhost:9000](http://localhost:9000).

#### Docker

To start the project as a standalone Docker container, you will need to first BUILD it, and then RUN it. For this, with the project folder as your CWD execute the following to build it:

```
docker build -f .docker/Dockerfile -t all_mart_backend .
```

Then execute the following to run it:

```
docker run -dp 9000:9000 all_mart_backend
```