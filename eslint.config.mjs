import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // If you are using eslint-plugin-react, the react/jsx-uses-react and react/react-in-jsx-scope rules are no longer necessary and can be turned off or removed.
      'react/jsx-uses-react': 'off',
      // React scope no longer necessary with new JSX transform
      'react/react-in-jsx-scope': 'off',
      // Allow .js files to use JSX syntax
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }]
    }
  },
  { languageOptions: { globals: globals.browser } },
  { languageOptions: { globals: globals.jest } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended
];
