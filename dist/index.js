
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./aanbswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./aanbswap-sdk.cjs.development.js')
}
