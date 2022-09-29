import type { Config } from "@jest/types";
// Sync object
const jestConfig: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  clearMocks: true,
  resetMocks: true,
  collectCoverageFrom: [
    "src/**",
    "!**/*.types.ts",
    "!**/*.constants.ts",
    "!src/action-compiler/mocker/**",
    "!src/index.ts",
    "!src/moctokit/generated/**"
  ],
  testLocationInResults: true,
  testResultsProcessor: "jest-sonar-reporter",
  testTimeout: 50000
};
export default jestConfig;