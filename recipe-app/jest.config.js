module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts', '<rootDir>/src/polyfills.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    transform: { '^.+\\.(ts|js|html)$': 'jest-preset-angular' }
  };
