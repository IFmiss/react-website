// next.config.js
const withTypescript = require('@zeit/next-typescript')
const withPlugins = require("next-compose-plugins")
const withLess = require('@zeit/next-less')
// console.log(withPlugins)
module.exports = withPlugins([
  [withTypescript],
  [withLess],
])
