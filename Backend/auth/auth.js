import { initializeApp } from 'firebase-admin/app';
const dotenv = require('dotenv');
dotenv.config();
const credentials = {
  type: process.env.FIREBASE_API_TYPE,
  project_id: process.env.FIREBASE_API_PROJECT_ID,
  private_key_id: process.env.FIREBASE_API_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_API_PRIVATE_KEY,
  client_email: process.env.FIREBASE_API_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_API_CLIENT_ID,
  auth_uri: process.env.FIREBASE_API_AUTH_URI,
  token_uri: process.env.FIREBASE_API_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_API_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_API_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIREBASE_API_UNIVERSE_DOMAIN
}
admin.initializeApp({
    credential: admin.credential.cert(credentials)
});
//authenticating token, return the user ID
export const authenticateToken = (token)=>{
    admin.auth().verifyIdToken(req.body.token)
    .then((decodedToken)=>{
        const uid = decodedToken.uid;
        return uid
    }).catch((error) => { // It will through Firebase Errors if the password is wrong length, not an email, etc...
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        return false;
    })
}
