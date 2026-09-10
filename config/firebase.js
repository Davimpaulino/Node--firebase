const admin = require("firebase-admin");

// Pega a chave da variável do Render ou do arquivo local
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : require("./serviceAccountKey.json");

if (serviceAccount.private_key) {
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sistemasweb-8fc66-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;