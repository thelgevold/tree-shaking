module.exports = {
  server: {
    middleware: {
      1: require('connect-history-api-fallback')({index: '/index-umd.html', verbose: true})
    }
  }
};