import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const {
    REACT_APP_APIKEY,
    REACT_APP_authDomain,
    REACT_APP_databaseURL,
    REACT_APP_projectId,
    REACT_APP_storageBucket,
    REACT_APP_messagingSenderId,
    REACT_APP_appId,
    REACT_APP_measurementId,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId,
  measurementId: REACT_APP_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);