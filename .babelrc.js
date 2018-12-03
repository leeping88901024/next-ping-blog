const env = require('./env.config')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ],
    ['transform-define',env],
  ]
}

/* {
  "presets": ["next/babel"],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ]
  ]
} */