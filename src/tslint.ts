// tslint:disable
export = {
  "extends": ["tslint:recommended", "tslint-config-prettier"],
  "rules": {
    "cyclomatic-complexity": [true, 10],
    "interface-name": false,
    "max-line-length": [true, 120],
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
    "no-console": [true],
    "no-magic-numbers": true,
    "no-non-null-assertion": true,
    "no-unused-expression": true,
    "no-unused-variable": true,
    "object-literal-sort-keys": false,
    "prefer-object-spread": true,
    "prefer-template": true,
    "quotemark": [true, "single", "jsx-double"],
    "type-literal-delimiter": [true]
  }
};
