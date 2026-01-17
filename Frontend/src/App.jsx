import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage' 
import FarmProfile from './pages/FarmProfile' 
import FieldAnalysis from './pages/FieldAnalysis' 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); 

  
  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={(page) => setCurrentPage(page)} />;
      case 'field':
        return <FieldAnalysis onNavigate={() => setCurrentPage('home')} />;
      case 'profile':
        return <FarmProfile onNavigate={() => setCurrentPage('home')} />;
      default:
        return <HomePage onNavigate={() => setCurrentPage('home')} />;
    }
  };

  return (
    /* Ensuring the root container is antialiased and handles 
       the full-screen background color properly.
    */
    <div className="antialiased min-h-screen bg-[#FBFCFB] selection:bg-green-100">
      {!isLoggedIn ? (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div className="flex flex-col h-screen">
          {/* Main Viewport */}
          <main className="flex-1 overflow-hidden">
             {renderContent()}
          </main>
        </div>
      )}
    </div>
  )
}

export default App