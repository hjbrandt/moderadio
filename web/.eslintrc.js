module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'prefer-destructuring': 'warn',
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'warn',
    'object-curly-spacing': ['error', 'never'],
    'jsx-quotes': ['off', 'never'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.9.0',
    },
  },
  parser: 'babel-eslint',
}
