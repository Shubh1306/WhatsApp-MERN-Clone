import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAxk0uT_BEBDxUb2biBSDR_EXagNFP2U3M",
    authDomain: "whatsapp-mern-e3a52.firebaseapp.com",
    projectId: "whatsapp-mern-e3a52",
    storageBucket: "whatsapp-mern-e3a52.appspot.com",
    messagingSenderId: "591777797844",
    appId: "1:591777797844:web:fdfc663644b9097bc38d41",
    measurementId: "G-WCV9KHGPN8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;