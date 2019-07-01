// next.config.js
const withTypescript = require('@zeit/next-typescript')
const withPlugins = require("next-compose-plugins")
const withLess = require('@zeit/next-less')
// console.log(withPlugins)
module.exports = withPlugins([
  [withTypescript],
  [withLess, {
    cssModules: false,
    cssLoaderOptions: {
      javascriptEnabled : true,
			importLoaders: 1,
			camelCase: true,
			localIdentName: "[local]___[hash:base64:5]",
    },
  }],
])
