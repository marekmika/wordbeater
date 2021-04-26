module.exports = {
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    API_KEY: process.env.FIREBASE_PUBLIC_API_KEY,
    AUTH_DOMAIN: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    DATABASE_URL: process.env.PUBLIC_FIREBASE_DB_URL,
    PROJECT_ID: process.env.PUBLIC_FIREBASE_PROJECT_ID,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
  },
}
