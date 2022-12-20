
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAHfEHXnJSyx1gEB8rMbVbVJYgyEeCs-3c",
  authDomain: "melhor-idade-6a420.firebaseapp.com",
  databaseURL: "https://melhor-idade-6a420-default-rtdb.firebaseio.com",
  projectId: "melhor-idade-6a420",
  storageBucket: "melhor-idade-6a420.appspot.com",
  messagingSenderId: "911752162396",
  appId: "1:911752162396:web:9a151f85e5f69ffb4f4a99"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export {app, database};