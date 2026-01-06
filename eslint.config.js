import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import _import from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  js.configs.recommended,
  {
    ignores: ['**/coverage', '**/dist', '**/node_modules', 'eslint.config.js']
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'airbnb-base',
      'prettier',
      'plugin:jest/all'
    )
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      jest: fixupPluginRules(jest),
      prettier
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...jest.environments.globals.globals
      },

      parser: babelParser,
      ecmaVersion: 2022,
      sourceType: 'module',

      parserOptions: {
        requireConfigFile: false,

        babelOptions: {
          parserOpts: {
            plugins: ['importAssertions']
          }
        }
      }
    },

    rules: {
      'prettier/prettier': ['error'],
      'no-restricted-syntax': 0,
      'no-console': 'off',
      'no-underscore-dangle': 0,
      // Disable jest rules that require TypeScript type information
      'jest/no-error-equal': 0,
      'jest/no-unnecessary-assertion': 0,
      'jest/valid-expect-with-promise': 0,

      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true
        }
      ],

      'import/no-unresolved': [
        2,
        {
          commonjs: true,
          amd: true
        }
      ],

      'import/extensions': [
        'error',
        {
          js: 'always',
          json: 'always'
        }
      ],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.js',
            '**/*.bruteforce-test.js',
            '**/*.spec.js'
          ]
        }
      ]
    }
  }
];
