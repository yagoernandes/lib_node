module.exports = {

  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: [
    'src/modules/**/*.ts',
  ],

  coverageDirectory: 'coverage',
  coverageReporters: [
    'json',
    'lcov',
  ],

  preset: 'ts-jest',

  testEnvironment: 'node',

  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
  ],

  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
