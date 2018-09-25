module.exports = {
  port: 3000,
  db: {
    host: 'localhost',
    port: 27017,
    defaultOptions: {
      promiseLibrary: global.Promise,
      w: 1,
      j: true
    },
    dbNames: ['todo']
  }
}
