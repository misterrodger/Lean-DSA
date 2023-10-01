module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['functional', 'immutable'],
  'rules': {
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['warn', { 'vars': 'all', 'varsIgnorePattern': '^_$', 'argsIgnorePattern': '^_$', 'ignoreRestSiblings': true }],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'eol-last': ['error', 'always'],
    'no-console': 'warn',
    // FP
    'no-loop-func': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prefer-destructuring': ['error', {
      array: true,
      object: true
    }, { enforceForRenamedProperties: true }],
    'no-var': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-restricted-syntax': ['error', 'SwitchStatement'],
    // concise
    'object-shorthand': ['error', 'always'],
    'no-useless-return': 'error',
    'no-useless-constructor': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-dupe-class-members': 'error'
  }
};
