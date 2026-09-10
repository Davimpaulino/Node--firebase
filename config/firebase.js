const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Ajusta a chave privada se houver escapamento de caracteres
if (serviceAccount && serviceAccount.private_key) {
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sistemasweb-8fc66-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;