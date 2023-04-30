module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@core': './src/core',
          '@navigators': './src/navigators',
          '@pages': './src/pages',
          '@theme': './src/theme',
          '@store': './src/store',
        },
      },
    ],
  ],
};
