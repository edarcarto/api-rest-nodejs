module.exports = {
  port: process.env.PORT || 3000,
  db  : process.MONGODB || 'mongodb://localhost:27017/shop',
  SECRET_TOKEN: 'secret'
}
