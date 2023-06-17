import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCcy63OGRgNfzx6vwvOotxjfy4kYGqavo",
  authDomain: "uploadfile-react.firebaseapp.com",
  projectId: "uploadfile-react",
  storageBucket: "uploadfile-react.appspot.com",
  messagingSenderId: "472825142321",
  appId: "1:472825142321:web:99a70e7de4597987a74910",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
