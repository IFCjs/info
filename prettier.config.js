module.exports = {
  overrides: [
    {
      files: ["blog/**/*.{md,mdx}", "docs/**/*.{md,mdx}"],
      options: {
        printWidth: Infinity,
        proseWrap: "never",
      },
    },
  ],
};
