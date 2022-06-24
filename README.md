[English](https://github.com/colorfulcompany/eslint-config-colorfulcompany/blob/main/README.md) / [日本語](https://github.com/colorfulcompany/eslint-config-colorfulcompany/blob/main/README.ja.md)

# Colorful Company's ESLint config

Colorful Company's ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs).

## Install

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

## Config variants

#### `colorfulcompany/node`
For Node.js environment.

#### `colorfulcompany/browser`
For browser environment. But enable the Node.js environment in consideration of using the bundler.

## Usage

Add this to your `.eslintrc.js` file:
```js
module.exports = {
  extends: 'colorfulcompany/browser' // or 'colorfulcompany/node'
}
```

## Rules
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

## ECMAScript version
### `colorfulcompany/node`: ECMAScript version is not specified.
It is probably set to the latest version of ECMAScript by `eslint-config-standard`, but for this project it is not specified.

### `colorfulcompany/browser`: Env and parser is set to ES2017.
As of October 2021, [ES2018 is not yet supported by most browsers](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally), so limit it to **ES2017** for now.

#### Is the ECMAScript version restriction not necessary when using a transpiler?
The transpilers are not perfect. Some functions may be delivered to the user without being transpiled. Specifically, these are as follows.
- RegExp named capture groups (ES2018)
- RegExp Lookbehind Assertions (ES2018)
- Flat array methods (ES2019)

So we made a policy of restricting to ES2017, **with or without a transpiler.**

## Why not use namespaces `@colorfulcompany` ?
If with a namespace like `@colorfulcompany/eslint-config`, when define multiple variants, way to extend is like this:

```js
module.exports = {
  extends: '@colorfulcompany/eslint-config/browser'
}
```

This way is a bit redundant.

## Direct dependencies

- [eslint-config-standard-with-typescript - npm](https://www.npmjs.com/package/eslint-config-standard-with-typescript)
- [eslint\-plugin\-jsdoc \- npm](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint\-plugin\-import \- npm](https://www.npmjs.com/package/eslint-plugin-import)

## References

- [javascript/packages/eslint\-config\-airbnb at master · airbnb/javascript](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [10up\-toolkit/packages/eslint\-config at develop · 10up/10up\-toolkit](https://github.com/10up/10up-toolkit/tree/develop/packages/eslint-config)
- [freaktechnik/eslint\-configs: eslint configurations freaktechnik likes](https://github.com/freaktechnik/eslint-configs)
