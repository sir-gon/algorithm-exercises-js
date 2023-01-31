const BRUTEFORCE =
  process.env.BRUTEFORCE && process.env.BRUTEFORCE.toUpperCase() === 'TRUE';

const jestConfig = {
  'verbose': true,
  'testEnvironment': 'node',
  'globals': {
    'NODE_ENV': 'test'
  },
  'moduleFileExtensions': ['js', 'jsx'],
  'moduleDirectories': ['node_modules', 'lambda/'],
  'collectCoverage': true,
  'coverageReporters': [
    'clover',
    'json',
    'lcov',
    ['text', { 'skipFull': false }]
  ],
  'coverageDirectory': 'coverage/',
  'collectCoverageFrom': ['src/**/*.{js,jsx,ts}', '!src/**/*.tsx'],
  'testPathIgnorePatterns': ['/node_modules/', '<rootDir>/coverage'],
  'testMatch': ['**/?(*.)+(spec|test).js?(x)'],
  'transform': {
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
};

if (BRUTEFORCE) {
  jestConfig.testMatch.push('**/?(*.)+(bruteforce-test).js?(x)');
}

export default jestConfig;
