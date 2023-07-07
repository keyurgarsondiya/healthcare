module.exports = {
  arrowParens: "always",
  proseWrap: "preserve",
  singleQuote: true,
  trailingComma: "es5",
  useTabs: true,
  overrides: [
    {
      files: "*.css",
      options: {
        // Prevent multi-variable rules being split except in egregious cases
        printWidth: 200,
      },
    },
  ],
};
