// eslint.config.js

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: js.configs.recommended, // optional unless you're using "eslint:recommended"
  allConfig: js.configs.all // optional unless you're using "eslint:all"
});

export default [
  // translate an entire config
  ...compat.config({
    //   ╔═╗╔═╗╦  ╦╔╗╔╔╦╗┬─┐┌─┐
    //   ║╣ ╚═╗║  ║║║║ ║ ├┬┘│
    //  o╚═╝╚═╝╩═╝╩╝╚╝ ╩ ┴└─└─┘
    // A set of basic code conventions (similar to a .jshintrc file) designed to
    // and encourage quality and consistency across your Sails app's code base.
    // These rules are checked against automatically any time you run `npm test`.
    //
    // > Note: If you're using mocha, you'll want to add an extra override file to your
    // > `test/` folder so that eslint will tolerate mocha-specific globals like `before`
    // > and `describe`.
    //
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // For more information about any of the rules below, check out the relevant
    // reference page on eslint.org.  For example, to get details on "no-sequences",
    // you would visit `http://eslint.org/docs/rules/no-sequences`.
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    'env': {
      'node': true,
      'es6': true,
      'es2020': true
      // "jest/globals": true
    },

    'parser': '@babel/eslint-parser',

    'parserOptions': {
      'requireConfigFile': false,
      'ecmaVersion': 2022,
      'sourceType': 'module'
      // "babelOptions": {
      //   "parserOpts": {
      //     "plugins": ["importAssertions"]
      //   }
      // }
    },

    'globals': {
      // If "no-undef" is enabled below and your app uses globals, be sure to list all
      // relevant globals below (including the globalIds of models, if appropriate):
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      // ...and any other backend globals (e.g. `"Organization": true`)
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    },

    'plugins': [
      // "import",
      'jest',
      'prettier'
    ],

    'extends': [
      'eslint:recommended',
      // "airbnb-base",
      'prettier',
      // "plugin:import/errors",
      // "plugin:import/warnings",
      'plugin:jest/all'
    ],

    'rules': {
      'prettier/prettier': ['warn']

      // // CUSTOM OVERRIDES
      // // TODO: remove no-restricted-syntax override and replace for...Of due
      // /// "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
      // "no-restricted-syntax":           0,
      // "no-console":                     "off",
      // "no-underscore-dangle":           0,
      // "no-plusplus":                    ["error", { "allowForLoopAfterthoughts": true }],
      // "import/no-unresolved":           [2, {"commonjs": true, "amd": true}],
      // "import/extensions":              ["error", { "js": "always", "json": "always"}],
      // "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.bruteforce-test.js", "**/*.spec.js"]}]
    }
  })
];
