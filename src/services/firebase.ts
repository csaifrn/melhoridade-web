import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCh_3sbACkoU_Bb58bjG9K0UBhx3Wnqwyk",
  authDomain: "teste-77ce5.firebaseapp.com",
  projectId: "teste-77ce5",
  storageBucket: "teste-77ce5.appspot.com",
  messagingSenderId: "992606768870",
  appId: "1:992606768870:web:0cfbbde33929fbea8eb527",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
