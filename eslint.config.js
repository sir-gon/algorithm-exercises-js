import neostandard from 'neostandard';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  ...neostandard({
    ignores: ['**/coverage', '**/dist', '**/node_modules', 'eslint.config.js'],
  }),
  {
    files: ['**/*.js'],
    plugins: {
      jest,
      prettier
    },
    rules: {
      ...jest.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': ['error'],
      'no-restricted-syntax': 0,
      'no-console': 'off',
      'no-underscore-dangle': 0,
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true
        }
      ],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'warn'
    }
  }
];
