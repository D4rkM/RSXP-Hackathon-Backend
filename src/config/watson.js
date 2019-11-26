const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: process.env.API_VERSION,
  authenticator: new IamAuthenticator({
    apikey: process.env.API_KEY,
  }),
  url: process.env.URL,
});