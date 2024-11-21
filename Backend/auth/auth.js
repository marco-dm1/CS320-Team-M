import { initializeApp } from 'firebase-admin/app';
import credentials from "./config/adminKey.json" with {type: 'json'};

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
