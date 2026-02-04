# Match Scoring Refactor

A refactored version of the match scoring application, migrated from legacy JavaScript to TypeScript using modern design patterns.

## Features

- **TypeScript**: Strong typing for matches and parsers.
- **Strategy Pattern**: Each sport has its own parsing strategy defined in `MatchParsers`.
- **Unit Tests**: Comprehensive testing using `Vitest`.

## Project Structure

- `src/processors`: Utility functions to process the data.
- `src/strategy`: Contains parsing logic for different sports.
- `src/services`: Business logic (MatchService) to process collections of matches.
- `src/types`: TypeScript definitions and Enums.
- `src/errors` : Error definitions
- `tests`: Unit tests.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended) - version requirement is only for good devx, after building code works even on node v6 (tested).
- npm

### Installation

```bash
npm install
```

### Running Tests

```bash
npm test
```

### Building and runninge the code 

```bash
npm build
npm start
```

### Testing the compatibility with node v6

```bash
npm run test-node-v6
```