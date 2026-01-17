import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage' 
import FarmProfile from './pages/FarmProfile' 
import FieldAnalysis from './pages/FieldAnalysis' 
import AdvisoryPage from './pages/AdvisoryPage' 
import MarketPage from './pages/MarketPage' 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); 

  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={(page) => setCurrentPage(page)} />;
      case 'field':
        return <FieldAnalysis onNavigate={(page) => setCurrentPage(page)} />;
      case 'advisory':
        return <AdvisoryPage onNavigate={(page) => setCurrentPage(page)} />;
      case 'market':
        return <MarketPage onNavigate={(page) => setCurrentPage(page)} />;
      case 'profile':
        return <FarmProfile onNavigate={(page) => setCurrentPage(page)} />;
      default:
        return <HomePage onNavigate={(page) => setCurrentPage(page)} />;
    }
  };

  return (
    <div className="antialiased min-h-screen bg-[#FBFCFB] selection:bg-green-100">
      {!isLoggedIn ? (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
             {renderContent()}
          </main>
        </div>
      )}
    </div>
  )
}

export default App