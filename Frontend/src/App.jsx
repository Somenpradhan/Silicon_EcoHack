import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage' 
import FarmProfile from './pages/FarmProfile' 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'profile'


  const renderContent = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={() => setCurrentPage('profile')} />;
    }
    return <FarmProfile onNavigate={() => setCurrentPage('home')} />;
  };

  return (
    <div className="antialiased min-h-screen">
      {!isLoggedIn ? (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        renderContent()
      )}
    </div>
  )
}

export default App