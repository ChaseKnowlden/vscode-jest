import * as editor from 'jest-editor-support'
declare module 'jest-editor-support' {
  interface JestTotalResults {
    coverageMap: any
  }

  type FormattedTestResults = {}
}
