module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'import', 'prettier'],
  rules: {
    // ✅ React 17+에서 불필요
    'react/react-in-jsx-scope': 'off',
    // ✅ 타입 검증(PropTypes) 사용 안 함
    'react/prop-types': 'off',
    // ✅ import 순서 정렬
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Node.js built-ins
          'external', // 외부 라이브러리 (react 등)
          'internal', // alias로 지정한 내부 모듈 (@/components 등)
          ['parent', 'sibling', 'index'], // 상대 경로
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc', // 알파벳 순
          caseInsensitive: true,
        },
        'newlines-between': 'always', // 그룹 간 한 줄 띄움
      },
    ],
    'import/no-named-as-default': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        // ✅ 항상 화살표 함수 사용
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
      },
    },
  ],
};
