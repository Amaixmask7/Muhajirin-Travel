const serverless = require('serverless-http');
const { createApp } = require('../../dist/index.js');

// Initialize the app for Netlify Functions
let app;

async function initializeApp() {
  if (!app) {
    app = await createApp();
  }
  return app;
}

// Export as serverless function
module.exports.handler = async (event, context) => {
  const app = await initializeApp();
  const handler = serverless(app);
  return handler(event, context);
};