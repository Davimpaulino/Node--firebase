const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = require(
    path.join(process.cwd(), "serviceAccountKey.json")
);

if (serviceAccount.private_key) {
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sistemasweb-8fc66-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = db;