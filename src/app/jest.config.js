module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    moduleNameMapper: {
      '\\.(css|scss|sass)$': 'identity-obj-proxy',
      '^next/(.*)': '<rootDir>/node_modules/next/dist/$1',
    },
};