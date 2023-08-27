import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFGoZWCN7NLdeIgpx1w4S-_mqhfglC_JM",
  authDomain: "reactlinks-a0391.firebaseapp.com",
  projectId: "reactlinks-a0391",
  storageBucket: "reactlinks-a0391.appspot.com",
  messagingSenderId: "518033077166",
  appId: "1:518033077166:web:5e2fb1a7ac4c220c6d0e3f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }
