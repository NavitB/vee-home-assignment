module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Ensure this path is correct
    testMatch: ['<rootDir>/tests/**/*.test.ts'],
    moduleDirectories: ['node_modules', 'src'], // Add this if you have a custom module resolution
  };