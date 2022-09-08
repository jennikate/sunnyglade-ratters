/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/assetMock.js',
    '\\.(gif|png|jpg|ttf|eot|svg)$': '<rootDir>/src/__mocks__/assetMock.js',
  },
  testEnvironment: 'jsdom',
};