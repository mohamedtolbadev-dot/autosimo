import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Afficher la notification après 1 seconde
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        {/* Notification promotionnelle en bas */}
        {showNotification && (
          <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-50">
            <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl shadow-2xl shadow-red-200 p-4 pr-10 relative animate-bounce-in">
              <button
                onClick={() => setShowNotification(false)}
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </button>
              
              <div className="flex items-start gap-3">
               
                <div>
                  <p className="font-bold text-sm">🎉 Offre spéciale !</p>
                  <p className="text-sm text-white/90 mt-1">
                    -10% sur votre première réservation avec le code <span className="font-bold bg-white/20 px-2 py-0.5 rounded">MAROC10</span>
                  </p>
                  <p className="text-xs text-white/70 mt-2">Offre limitée • Valable jusqu'au 28 février</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;