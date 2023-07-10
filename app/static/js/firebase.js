// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, push, set} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBO5w8pZpiI1OR1OC66lvJV1ioNxK0hTHw",
  authDomain: "newspace-391321.firebaseapp.com",
  databaseURL: "https://newspace-391321-default-rtdb.firebaseio.com",
  projectId: "newspace-391321",
  storageBucket: "newspace-391321.appspot.com",
  messagingSenderId: "534766683426",
  appId: "1:534766683426:web:9309fdca6a32e47751117b",
  // The value of `databaseURL` depends on the location of the database
};

const app = initializeApp(firebaseConfig);
export var db = getDatabase(app);