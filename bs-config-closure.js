module.exports = {
  server: {
    middleware: {
      1: require('connect-history-api-fallback')({index: '/index-closure.html', verbose: true})
    }
  }
};