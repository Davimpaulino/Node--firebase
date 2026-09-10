// CONFIGURAÇÃO FIREBASE REALTIME DATABASE
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");

const firebaseConfig = {
  databaseURL: "https://sistemasweb-8fc66-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

module.exports = db;