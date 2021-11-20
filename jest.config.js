module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/spec/importJestDOM.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '^config/(.*)$': '<rootDir>/config/$1',
    '^app/(.*)$': '<rootDir>/src/client/app/$1',
    '^api/(.*)$': '<rootDir>/src/resources/api/$1',
    '^schemas/(.*)$': '<rootDir>/src/resources/schemas/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^resources/(.*)': '<rootDir>/src/resources/$1',
    '^entities/(.*)': '<rootDir>/src/entities/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '\\.(jpg|jpeg|png)$': '<rootDir>/config/spec/fileMock.ts',
    '\\.(icon.svg)$': 'svg',
    '\\.(css|scss)$': 'identity-obj-proxy'
  }
}
