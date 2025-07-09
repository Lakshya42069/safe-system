import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbHc3dFOFp5-LmexFlEVvSSSAnAXwP4Ow",
  authDomain: "safesystem-59dce.firebaseapp.com",
  databaseURL: "https://safesystem-59dce-default-rtdb.firebaseio.com", // this line is CRITICAL
  projectId: "safesystem-59dce",
  storageBucket: "safesystem-59dce.appspot.com",
  messagingSenderId: "640263861370",
  appId: "1:640263861370:web:f4e762c931ba79ae1d77c3"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };