import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcDsxsMtKV63CbrzX9dZD2nCWCzZb6FU8",
  authDomain: "project-8246617901070395643.firebaseapp.com",
  databaseURL: "https://project-8246617901070395643-default-rtdb.firebaseio.com",
  projectId: "project-8246617901070395643",
  storageBucket: "project-8246617901070395643.appspot.com",
  messagingSenderId: "25013355852",
  appId: "1:25013355852:web:eedc015926eb66e008fbe9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
