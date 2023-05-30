# Pokemon Evolution Finder

This is a web application built with Next.js, utilizing npm as the package manager and Jest with React Testing Library for unit testing. The application allows users to find the evolution chain and variations for a given Pokemon.

## Features

Pokemon Evolution Chain: Users can search for a Pokemon by name and view its evolution chain. The
evolution chain includes all variations and their respective evolutions.

## Technology Stack

The project is built using the following technology stack:

- Next.js: A React framework for building server-side rendered and static websites. It provides a
  seamless development experience and optimized performance.
- npm: The package manager for JavaScript. It is used to manage project dependencies and run scripts.
- Jest: A JavaScript testing framework that provides a simple and intuitive way to write unit tests. It is used for testing components and functions in the application.
- React Testing Library: A lightweight testing library for React applications. It provides utilities for rendering components, querying the DOM, and interacting with the application during tests.

## Getting Started

Pre-reqs:
Please ensure git https://git-scm.com/downloads, and node https://nodejs.org/en/download are installed

To get started with the Pokemon Evolution Finder application, follow the steps below:

1. Clone the repository: Clone this repository to your local machine using the following command:
   git clone https://github.com/sandhyaboray/pokemon-finder.git

2. Install dependencies: Navigate to the project directory and install the dependencies using npm:
   cd pokemon-finder

```
npm install
```

3. Start the development server: Run the following command to start the development server:

```
npm run dev
```

This will start the application on [http://localhost:3000](http://localhost:3000). 
You can access it in your browser. 
Type the name of the pokemon for example: bulbasaur in the input box and click on the search button to view the result

## Testing

The application includes unit tests for pages and api’s. 
To run the tests, navigate to the /tests/ folder and folder 'pages' to run the tests for all pages
or 'api' directory to run the tests for api's in the project and use the following command:

```
npm run test <filename>
```

This will execute the tests and display the test results in the console as below:

```
 PASS  tests/api/get-chain.test.ts
 PASS  tests/api/get-species-url.test.ts
 PASS  tests/api/get-evolution-chain-url.test.ts
 PASS  tests/pages/500.test.tsx
 PASS  tests/pages/search.test.tsx
 PASS  tests/pages/index.test.tsx

Test Suites: 6 passed, 6 total
````
