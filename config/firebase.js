const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Garante que as quebras de linha da private_key do JSON funcionem no Render
if (serviceAccount.private_key) {
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sistemasweb-8fc66-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;