export default {
  env: process.env.NODE_ENV == null ? 'development' : process.env.NODE_ENV,
  port: process.env.PORT | 3000,
  api: { port: 9090 }
}
