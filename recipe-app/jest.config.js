module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts']
};
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   "./src/app/**/*.ts"
  // ],
  // coveragePathIgnorePatterns: [
  //   "./src/app/*.ts"
  // ],
  // coverageThreshold: {
  //   global: {
  //     lines: 90,
  //     statements: 90,
  //     branch: 90,
  //     functions: 90
  //   }
  // },
  // verbose: false,
  // reporters: [
  //   ['jest-slow-test-reporter', {"numTests": 0, "warnOnSlowerThan": 300, "color": true}]
  // ]
