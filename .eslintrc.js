module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ''
  ],
  rules: {
    eqeqeq: 'error', //===にしないとエラー
    'no-console': 'warn', //console.xxxを使うと警告
    'no-warning-comments': [
      //対象のコメントを書くと警告
      'warn',
      { terms: ['todo', 'fixme', 'memo'], location: 'anywhere' },
    ],
    'max-statements': ['warn', 30], //宣言した関数や変数の上限値
    'max-lines': ['warn', 500], //1ファイルの最大行数
    'max-lines-per-function': ['warn', { max: 30, skipBlankLines: true }], //関数内の行数が30行超えると警告
    'max-depth': ['warn', 3], //ネストが3を超えると警告
    complexity: ['warn', 5], //複雑度が5を超えると警告
    '@typescript-eslint/quotes': ['error', 'single'], 
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: 'variableLike', format: ['camelCase'] },
      { selector: 'method', format: ['camelCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'parameter', format: ['camelCase'] },
    ],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
  },
};