
import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAA55zwMso7Qc9FcRqiUE5s5yW8LycTxcs",
  authDomain: "coffeeandcode-d8fe3.firebaseapp.com",
  projectId: "coffeeandcode-d8fe3",
  storageBucket: "coffeeandcode-d8fe3.appspot.com",
  messagingSenderId: "642583046551",
  appId: "1:642583046551:web:a87fc058acde986ec23cd2",
  measurementId: "G-Q7PV3H8XCC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)   

