export default {
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
    ['text', { 'skipFull': true }]
  ],
  'coverageDirectory': 'coverage/',
  'testMatch': ['**/?(*.)+(spec|test).js?(x)']
};
