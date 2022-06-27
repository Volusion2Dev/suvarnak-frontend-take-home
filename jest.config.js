module.exports = {
  setupFilesAfterEnv: ['./__test__/setup.ts'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
};
