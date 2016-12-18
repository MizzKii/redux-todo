export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  api: { port: 9090 }
}
