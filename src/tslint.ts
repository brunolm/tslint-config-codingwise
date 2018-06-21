// tslint:disable:no-magic-numbers
export = {
  extends: ['tslint:recommended', 'tslint-config-prettier'],
  rules: {
    'cyclomatic-complexity': [true, 10],
    'interface-name': false,
    'member-access': [true],
    'member-ordering': [
      true,
      {
        order: ['static-field', 'instance-field', 'static-method', 'instance-method'],
      },
    ],
    'newline-before-return': true,
    'no-bitwise': false,
    'no-conditional-assignment': false,
    'no-magic-numbers': true,
    'no-non-null-assertion': true,
    'no-unused-variable': true,
    'object-literal-sort-keys': false,
    'prefer-object-spread': true,
    'prefer-template': true,
    quotemark: [true, 'single', 'jsx-double'],
    'type-literal-delimiter': [true],
  },
};
