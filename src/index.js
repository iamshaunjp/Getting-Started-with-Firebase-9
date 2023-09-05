import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoOcRS3gIA_iXnbHS0icqcc8u7hiR3I-c",
  authDomain: "fir-9-dojo-e94ab.firebaseapp.com",
  projectId: "fir-9-dojo-e94ab",
  storageBucket: "fir-9-dojo-e94ab.appspot.com",
  messagingSenderId: "140326738939",
  appId: "1:140326738939:web:57e944d609e9508c7b095e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "books")

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books)
  })

  .catch((err) => {
    console.log(err.message)
  })

// adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  }).then(() => {
    addBookForm.reset()
  })
})

// deleting documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault()
})
