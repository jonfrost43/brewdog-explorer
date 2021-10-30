# brewdog-explorer

Search and visualise Brewdog beer recipes with data from [Punk API](https://punkapi.com/documentation/v2).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test -- --watchAll=false --coverage`

Performs a single run of unit tests and outputs code coverage.

### `npm run build`

Builds the app for production to the `build` folder.

## Developer notes

A pre-commit hook is configured to run `prettier`, `lint-staged` and all unit tests.

CSS modules are used to scope styles to components.

React components in `/src/views` are bound to routes and generally only used once.

React components in `src/common` are re-used throughout the project and use Typescript interfaces to declare types for their props.

## Deployment

The master branch is deployed on Netlify at https://brewdog-explorer.netlify.app
