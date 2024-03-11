import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  collectCoverage: true
  // setupFilesAfterEnv: ['<rootDir>/setup-env.tsx']
}

export default jestConfig
