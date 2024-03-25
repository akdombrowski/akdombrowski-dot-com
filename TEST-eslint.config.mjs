
import * as mdx from "eslint-plugin-mdx";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import nextESlint from "eslint-config-next";

export default tseslint.config(
  nextESlint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: [],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    plugins: {
      // jsdoc: jsdoc,
    },
  },
  {
    ...mdx.flat,
    // optional, if you want to lint code blocks at the same
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  { ...eslintConfigPrettier },
);
