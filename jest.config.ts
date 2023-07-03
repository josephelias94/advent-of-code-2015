import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  collectCoverageFrom: ['src/**/*.ts'],
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  verbose: true,
};

export default jestConfig;
