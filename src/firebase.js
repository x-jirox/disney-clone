import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA5uKI1gFGFAS16StQ2kq4vGB25dQW-75s",
  authDomain: "disney-plus-clone-a4fd2.firebaseapp.com",
  projectId: "disney-plus-clone-a4fd2",
  storageBucket: "disney-plus-clone-a4fd2.appspot.com",
  messagingSenderId: "1090057819598",
  appId: "1:1090057819598:web:c793a86a429bc8c9e3c79f",
  measurementId: "G-HTKJZEDLG2"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;