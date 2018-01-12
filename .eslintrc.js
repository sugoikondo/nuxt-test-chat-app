module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "no-multi-spaces": [2, {"exceptions": {"Property": true, "ImportDeclaration": true, "VariableDeclarator": true, "AssignmentExpression": true}}]
  },
  globals: {}
}
