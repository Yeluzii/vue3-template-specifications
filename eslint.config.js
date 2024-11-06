import globals from 'globals'
import pluginJs from '@eslint/js' // 校验JS规范的(推荐)
import tseslint from 'typescript-eslint' // 推荐的ts规范
import pluginVue from 'eslint-plugin-vue' // 推荐的vue规范
import prettierRecommend from 'eslint-plugin-prettier/recommended'

export default [
  // 1. 检测文件的格式
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  // 2. 定义不同环境的全局变量
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  // 3. js 推荐 规则
  pluginJs.configs.recommended,
  // 4. ts 推荐 规则
  ...tseslint.configs.recommended,
  // 5. vue 推荐 规则
  ...pluginVue.configs['flat/essential'],
  // 6. 检测 vue 中的 ts 代码采用 tsparser
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  // 7. ignores 配置
  {
    ignores: [
      'node_modules/*',
      'dist/*',
      '*.css',
      '*.jpg',
      '*.jpeg',
      '*.png',
      '*.gif',
      '*.d.ts'
    ]
  },
  // 8. 自定义规则，根据需要增加 eslint 主要是校验代码规范 prettier 格式化代码
  {
    rules: {
      'no-console': 'error',
      'vue/multi-word-component-names': 'off'
    }
  },
  prettierRecommend
]
