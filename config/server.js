module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4ee2cc239699f3a1a6d780b33781f46e'),
    },
  },
});
