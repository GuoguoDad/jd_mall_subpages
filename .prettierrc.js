module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 120,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  parser: 'typescript',

  importOrder: ["<THIRD_PARTY_MODULES>", "^@react-navigation/(.*)$", "^@liuhui1990/(.*)$", "^@reduxjs/(.*)$", "^@comps$", "^@store$", "^@(.*)$",  "^@pages/(.*)$", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true
}
