// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTIpojp6H-Rz7B0g96n7SpuMOnWcQ8HBA",
    authDomain: "ems-pro-com.firebaseapp.com",
    projectId: "ems-pro-com",
    storageBucket: "ems-pro-com.appspot.com",
    messagingSenderId: "946722802692",
    appId: "1:946722802692:web:ebb918fe382dffd379b951"
};

export let firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const initFirebase = () => {
    firebaseApp = initializeApp(firebaseConfig);
}