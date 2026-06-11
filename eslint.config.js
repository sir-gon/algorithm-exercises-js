import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import js from '@eslint/js';

export default [
  {
    ignores: ['**/coverage', '**/dist', '**/node_modules', 'eslint.config.js']
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...jest.environments.globals.globals
      }
    },
    plugins: {
      jest,
      prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jest.configs.recommended.rules,
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
