// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: 'mern-project-526a1.firebaseapp.com',
  projectId: 'mern-project-526a1',
  storageBucket: 'mern-project-526a1.appspot.com',
  messagingSenderId: '630072552965',
  appId: '1:630072552965:web:d34ee82a3365f9ea39766c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
