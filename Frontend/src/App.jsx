import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import FarmProfile from './pages/FarmProfile' 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="antialiased min-h-screen">
      {isLoggedIn ? (
        <FarmProfile />
      ) : (
       
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  )
}

export default App