module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx'],
      rules: {
        semi: ['error', 'never'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react-hooks/rules-of-hooks': 'off'
      }
    }
  ]
}
