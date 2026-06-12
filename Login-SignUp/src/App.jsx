import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Signin from "./Pages/Signin.jsx"
import SignUp from "./Pages/SignUp.jsx"
import Dashboad from './Components/Dashboad.jsx'
import {Navigate,Routes, Route} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAuth,
   onAuthStateChanged,
 } from "firebase/auth";
import About from './Pages/About.jsx'
import WebDevelopment from './Pages/WebDevelopement.jsx'
import DigitalMarketing from './Pages/DigitalMarketing.jsx'
import AppDevelopment from './Pages/AppDevelopment.jsx'
import UiUxDesigner from './Pages/UiUxDesigner.jsx'
import ArtificalIntelligence from './Pages/ArtificalIntelligence.jsx'
import GraphicsDesigner from './Pages/GraphicsDesigner.jsx' 
import Navbar from './Components/Navbar.jsx'
import Blog from './Pages/Blog.jsx'
import Pricing from './Pages/Pricing.jsx'
import Contact from './Pages/Contact.jsx'

function App() {

  const firebaseConfig = {
  apiKey: "AIzaSyBIBVVl1-qah5qPAns6ULaO8QmjfcnugiA",
  authDomain: "ecommerce-7f1e2.firebaseapp.com",
  databaseURL: "https://ecommerce-7f1e2-default-rtdb.firebaseio.com",
  projectId: "ecommerce-7f1e2",
  storageBucket: "ecommerce-7f1e2.firebasestorage.app",
  messagingSenderId: "1090647740235",
  appId: "1:1090647740235:web:525b9d48f10087cc7022ce",
  measurementId: "G-LZLVCX6VZ6"
};

const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [isUserLogedin , setIsUserLogedin] = useState(null)

  useEffect (() => {
      onAuthStateChanged(auth, (user) => {
  if (user) {
    setIsUserLogedin(true)
    console.log(user)
  } else {
   setIsUserLogedin(false)
   console.log(user)
  }
});
},[])


  return (
    <div className='App'>
       <Navbar />
      {isUserLogedin == null ? (
        <div> Loading ... </div>
      ): isUserLogedin ? (
        <Routes>
    <Route path='/' element={<Dashboad/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services/webdevelopment' element={<WebDevelopment/>}/>
    <Route path='/services/digitalmarketing' element={<DigitalMarketing/>}/>
    <Route path='/services/appdevelopment' element={<AppDevelopment/>}/>
    <Route path='/services/uiuxdesigner' element={<UiUxDesigner/>}/>
    <Route path='/services/artificalintelligence' element={<ArtificalIntelligence/>}/>
    <Route path='/services/graphicsdesigner' element={<GraphicsDesigner/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path = "*" element = {<Navigate to={"/"}/>}/>
    </Routes>
      ):(
        <Routes>
          <Route path='/login' element = {<Signin/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='*' element={<Navigate to={"/login"}/>}/>
        </Routes>
      )}

    </div>

  )
}

export default App