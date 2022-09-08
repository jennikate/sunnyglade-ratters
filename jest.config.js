// /*
//  * For a detailed explanation regarding each configuration property, visit:
//  * https://jestjs.io/docs/en/configuration.html
//  */

module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
  testEnvironment: 'jsdom',
};