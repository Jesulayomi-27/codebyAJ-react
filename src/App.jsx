import React from 'react'
import LandingPage from './pages/LandingPage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <LandingPage />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

