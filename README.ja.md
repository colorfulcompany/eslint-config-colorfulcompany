[English](https://github.com/colorfulcompany/eslint-config-colorfulcompany/blob/main/README.md) / [日本語](https://github.com/colorfulcompany/eslint-config-colorfulcompany/blob/main/README.ja.md)

# Colorful Company's ESLint config

Colorful Company's ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs).

## インストール

```
yarn add -D \
  typescript \
  eslint \
  https://github.com/colorfulcompany/eslint-config-colorfulcompany \
  @typescript-eslint/eslint-plugin \
  eslint-config-standard-with-typescript \
  eslint-plugin-import \
  eslint-plugin-jsdoc \
  eslint-plugin-node \
  eslint-plugin-promise
```

## 設定の種類

#### `colorfulcompany/node`
Node.js の環境のための設定。

#### `colorfulcompany/browser`
ブラウザの環境のための設定であるが、ビルドツールの利用を考慮して、デフォルトでは Node.js の環境が有効になっている。

## 利用方法

`.eslintrc.js` に以下の内容を追加。
```js
module.exports = {
  extends: 'colorfulcompany/browser' // or 'colorfulcompany/node'
}
```

## ルール
- Extends [`standard-with-typescript`](https://github.com/standard/eslint-config-standard-with-typescript)
- Extends [`plugin:jsdoc/recommended`](https://github.com/gajus/eslint-plugin-jsdoc)
- No console on production.
- No debugger on production.
- Require JSDoc for arrow function expression.
```js
/**
 *
 * @param {string} hoge
 */
const hoge = (input) => {
  console.log(input)
}
```
- Require JSDoc for class declaration.
```js
/**
 * This is a description.
 */
class Hoge {...}
```
- Require JSDoc for function declaration.
```js
/**
 * @param {string} input
 */
function hoge (input) {...}
```
- Require JSDoc for method definition.
```js
class Hoge {
  /**
   * @param {string} input
   */
  fuga (input) {...}
}
```
- JSDoc param description is optional.
- JSDoc returns description is optional.
- Don't use default export.
```js
export default class Hoge {...} // ✗ avoid
export class Hoge {...} // ✓ ok
```

## ECMAScript のバージョン
### `colorfulcompany/node`: ECMAScript のバージョンは指定無し
ただし `eslint-config-standard` によって env, parser が特定のバージョンに指定されている可能性がある。

### `colorfulcompany/browser`: ES2017 に制限
2021年10月の時点では, [ES2018 はほとんどのブラウザに対応しているとは言えない](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) ので現時点では ES2017 に制限する。

#### トランスパイラを利用している場合は？
トランスパイラは全ての機能を完全にトランスパイルする訳ではなく、以下のような機能はそのままユーザーに配信されてしまう。

- RegExp named capture groups (ES2018)
- RegExp Lookbehind Assertions (ES2018)
- Flat array methods (ES2019)

以上のことから、トランスパイラの利用の有無に関わらず ES2017 の記法に制限する方針を採用。

## `@colorfulcompany` の名前空間を採用しない理由
`@colorfulcompany/eslint-config` のように名前空間を用いたプロジェクト名にしなかったのは、そうした場合には以下のように、冗長な名前で extends に指定する必要があるため。

```js
module.exports = {
  extends: '@colorfulcompany/eslint-config/browser'
}
```

## 直接的な依存

- [eslint-config-standard-with-typescript - npm](https://www.npmjs.com/package/eslint-config-standard-with-typescript)
- [eslint\-plugin\-jsdoc \- npm](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint\-plugin\-import \- npm](https://www.npmjs.com/package/eslint-plugin-import)

## 参考

- [javascript/packages/eslint\-config\-airbnb at master · airbnb/javascript](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [10up\-toolkit/packages/eslint\-config at develop · 10up/10up\-toolkit](https://github.com/10up/10up-toolkit/tree/develop/packages/eslint-config)
- [freaktechnik/eslint\-configs: eslint configurations freaktechnik likes](https://github.com/freaktechnik/eslint-configs)
