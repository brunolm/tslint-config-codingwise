# tslint-config-codingwise

## Install

```bash
npm i -D tslint-config-codingwise
```

* requires `npm i -D tslint`

## Config

### Node

```json
{
    "extends": "tslint-config-codingwise"
}
```

### Angular

```json
{
    "extends": "tslint-config-codingwise/angular"
}
```

### React


```json
{
    "extends": "tslint-config-codingwise/react"
}
```

## Rules

- [tslint:recommended](https://github.com/palantir/tslint/blob/2b8a7374cf0fa28e85d95beb40aafd7cb011d157/src/configs/recommended.ts)
- [tslint:react](https://github.com/palantir/tslint-react/blob/master/tslint-react.json)
- [tslint:codelyzer](https://github.com/mgechev/codelyzer)
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

  // codelyzer
  "no-output-on-prefix": true,
  "use-input-property-decorator": true,
  "use-output-property-decorator": true,
  "use-host-property-decorator": true,
  "no-input-rename": true,
  "no-output-rename": true,
  "use-life-cycle-interface": true,
  "use-pipe-transform-interface": true,
  "component-class-suffix": true,
  "directive-class-suffix": true,
}
```
