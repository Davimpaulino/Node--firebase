const admin = require("firebase-admin");
let serviceAccount = require("./serviceAccountKey.json");

// Se o JSON veio formatado do arquivo/env com \n como texto puro, converte em quebras de linha reais
if (typeof serviceAccount === "string") {
  serviceAccount = JSON.parse(serviceAccount);
}

if (serviceAccount.private_key) {
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sistemasweb-8fc66-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;