export default () => ({
  port: parseInt(process.env.PORT) || 4001,
  expiresTime: process.env.EXPIRES_TIME,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: 'sa',
    password: 'Onepay0!',
    name: 'onepay_db',
    synchronize: process.env.DB_SYNC === 'true' ? true : false,
    options: { trustServerCertificate: true },
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: 'one_pay',
  },
});
