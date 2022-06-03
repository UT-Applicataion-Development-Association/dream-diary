module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/display-name': [0],
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'indent': ['error', 2],
    'comma-spacing': ['warn', { before: false, after: true }],
    'object-curly-spacing': ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'require-jsdoc': ['warn'],
    'no-useless-catch': ['warn'],
    'react/prop-types': ['warn'],
  },
}
