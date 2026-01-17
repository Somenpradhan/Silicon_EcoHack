import { useState } from 'react'
import LoginPage from './pages/LoginPage' // Ensure the path matches your file structure

function App() {
  // You can keep the count state if you plan to use it later, 
  // but for a clean login screen, we just return the component.
  return (
    <div className="antialiased">
      <LoginPage />
    </div>
  )
}

export default App
