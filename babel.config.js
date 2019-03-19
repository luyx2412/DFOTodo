/** @format */

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        cwd: "babelrc",
        alias: {
          "@src": "./src",
          "@containers": "./src/containers",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@libs": "./src/libs"
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: ["react-native-paper/babel"]
    }
  }
};
