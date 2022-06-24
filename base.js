module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:jsdoc/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'import/no-default-export': 'error'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: ['*.vue', '**/@types/**'],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      files: ['*.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    {
      files: ['*.*'],
      excludedFiles: ['**/*.spec.js', '**/*.spec.ts'],
      extends: [
        'plugin:jsdoc/recommended'
      ],
      rules: {
        'jsdoc/require-jsdoc': [
          process.env.CI === 'true' ? 'warn' : 'error',
          {
            require: {
              ArrowFunctionExpression: true,
              ClassDeclaration: true,
              ClassExpression: true,
              FunctionDeclaration: true,
              FunctionExpression: true,
              MethodDefinition: true
            }
          }
        ]
      }
    }
  ]
}
