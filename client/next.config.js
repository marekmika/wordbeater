module.exports = {
  publicRuntimeConfig: {
    apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.PUBLIC_FIREBASE_DB_URL,
    projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
    debugConfig: process.env.DEBUG_CONFIG,
  },
}
