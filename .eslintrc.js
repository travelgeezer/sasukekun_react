module.exports = {
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react'],
  globals: {
    BMap: true,
    BMAP_ANCHOR_TOP_LEFT: true,
    BMAP_ANCHOR_TOP_RIGHT: true,
    BMAP_NAVIGATION_CONTROL_SMALL: true,
    SASUKEKUN_CONFIG: true
  },
  rules: {
    'max-len': 0,
    'no-lone-blocks': 0,
    'linebreak-style': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'no-confusing-arrow': 0,
    'no-mixed-operators': 0,
    'no-class-assign': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    // 关掉jsx中不能使用bind
    'react/jsx-no-bind': [
      0,
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: true
      }
    ],
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    // jsx 最后关闭标签需要一个空格，已关闭
    'react/jsx-space-before-closing': 0,
    'react/jsx-filename-extension': 0,
    // 无状态的组件目前不检测
    'react/prefer-stateless-function': 0,
    'react/jsx-indent': 0,
    // 组件的属性类型也不检测
    'react/prop-types': [
      0,
      {
        ignore: ['children', 'form']
      }
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 1,
    'consistent-return': 1,
    // 对象包裹不检测
    'object-curly-spacing': 0,
    // 文件最后留一个空行
    'eol-last': 0,
    'comma-dangle': ['error', 'never'],
    'no-unused-expressions': 0
  }
};
