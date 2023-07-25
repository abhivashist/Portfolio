import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCScYu5ojXhK1IjDCSP1LJWr279QgTWeGE",
  authDomain: "portfolio-253c6.firebaseapp.com",
  databaseURL: "https://portfolio-253c6-default-rtdb.firebaseio.com/",
  projectId: "portfolio-253c6",
  storageBucket: "portfolio-253c6.appspot.com",
  messagingSenderId: "810324289888",
  appId: "1:810324289888:web:78432b339bd1e794591605"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
