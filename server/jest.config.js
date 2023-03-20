module.exports = {
  displayName: "server",

  // NOTE: if you don't set this correctly then when you reference
  // it later in a path string you'll get a confusing error message.
  // It says something like' Module <rootDir>/config/polyfills.js in
  // the setupFiles option was not found.'
  rootDir: "../",

  testMatch: [
    "<rootDir>/server/tests/*.test.{js,jsx}",
    // "<rootDir>/src/server/**/__tests__/unit/*.{js,jsx}"
  ],

  testEnvironment: "node"

  // etc...
};
