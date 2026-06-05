import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from "./Home.jsx"
import SignUp from "./SignUp.jsx"
import Navbar from './Components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
 import{
    firebaseConfig,
    initializeApp,
    getAuth, 
    createUserWithEmailAndPassword,
   onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider, 
    signInWithPopup
  } from './Firebase.js'

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  // console.log(auth)


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/signup" element = {<SignUp/>}/>
    </Routes>
    </>

  )
}

export default App
