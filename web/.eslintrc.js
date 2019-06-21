module.exports = {
  extends: ["standard", "standard-react", "plugin:import/errors", "plugin:import/warnings"],
  rules: {
    "prefer-destructuring": "warn",
    "react/prop-types": "warn",
    "react/destructuring-assignment": "warn",
    "object-curly-spacing": ["error", "never"]
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.4"
    }
  },
  parser: "babel-eslint"
};
