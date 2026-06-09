import React from 'react'
import { getAuth, signOut } from "firebase/auth";

const Dashboad = () => {
  const auth = getAuth();

  const Logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Hello User 👋
        </h1>

        <p className="text-gray-500 mb-6">
          Welcome to your dashboard. You are successfully logged in.
        </p>

        <button
          onClick={Logout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default Dashboad