const isProd = process.env.NODE_ENV === 'production'
const path = require('path')
module.exports = {
  outputDir: path.resolve(__dirname, 'docs'),
  publicPath: isProd ? 'https://theniceangel.github.io/confess/' : '/'
}
