const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'prefer-destructuring': 'warn',
    'react/prop-types': 'warn',
    'react/destructuring-assignment': 'warn',
    'object-curly-spacing': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6'
    }
  }
}
