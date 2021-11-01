module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  autoReload: { enabled: true },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '53296f00ffafe29b816e653778b24d80'),
    },
  },
});
