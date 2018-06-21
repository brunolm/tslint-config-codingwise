# tslint-config-codingwise

## Install

```bash
npm i -D tslint-config-codingwise
```

* requires `npm i -D tslint`

## Config

```json
{
    "extends": "tslint-config-codingwise"
}
```

## Rules

- [tslint:recommended](https://github.com/palantir/tslint/blob/2b8a7374cf0fa28e85d95beb40aafd7cb011d157/src/configs/recommended.ts)
- [tslint:prettier](https://github.com/alexjoverm/tslint-config-prettier)

Overrides
```json
{
  "cyclomatic-complexity": [true, 10],
  "interface-name": false,
  "member-access": [true],
  "member-ordering": [
    true,
    {
      "order": [
        "static-field",
        "instance-field",
        "static-method",
        "instance-method"
      ]
    }
  ],
  "newline-before-return": true,
  "no-bitwise": false,
  "no-conditional-assignment": false,
  "no-magic-numbers": true,
  "no-non-null-assertion": true,
  "no-unused-variable": true,
  "object-literal-sort-keys": false,
  "prefer-object-spread": true,
  "prefer-template": true,
  "quotemark": [true, "single", "jsx-double"],
  "type-literal-delimiter": [true],
}
```
