
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTtHRtRmmfmYnTSrRvHesHqbMGGXHBjKQ",
  authDomain: "teste-fc95e.firebaseapp.com",
  databaseURL: "https://teste-fc95e-default-rtdb.firebaseio.com",
  projectId: "teste-fc95e",
  storageBucket: "teste-fc95e.appspot.com",
  messagingSenderId: "926998956925",
  appId: "1:926998956925:web:675ca5fd99849e23879a14",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export {app, database};