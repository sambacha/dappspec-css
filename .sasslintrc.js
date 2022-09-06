module.exports = {
    options: {
      'merge-default-rules': false
    },
    files: {
      include: [
        'src/styles/**/*.scss'
      ],
      ignore: [
        'node_modules/**/*.s+(a|c)ss',
        'src/__tests__/*.scss',
        'src/__fixtures__/*.scss',
        'src/_profile.scss',
        'src/styles/test.scss'
      ]
    },
    rules: {
      'attribute-quotes': 2,
      'brace-style': 2,
      'border-zero': 2,
      'declarations-before-nesting': 2,
      'empty-line-between-blocks': 2,
      'final-newline': 2,
      'hex-notation': 2,
      'indentation': 2,
      'no-css-comments': 2,
      'no-debug': 2,
      'no-mergeable-selectors': 2,
      'no-misspelled-properties': 2,
      'no-trailing-whitespace': 2,
      'no-transition-all': 2,
      'placeholder-in-extend': 2,
      'pseudo-element': 2,
      'quotes': 2,
      'shorthand-values': 2,
      'single-line-per-selector': 2,
      'space-after-comma': 2,
      'space-around-operator': 2
    }
  }
