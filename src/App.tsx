import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { CartProvider } from './hooks/useCart';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import './App.css';

function AppContent() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Add JS-enabled class for animation handling
    document.documentElement.classList.add('js-enabled');

    // Create IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    // Function to observe all fade-in elements
    const observeElements = () => {
      // Small delay to ensure DOM is updated after route change
      setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in:not(.fade-in-visible)');
        elements.forEach((el) => {
          // Remove existing classes to reset animation
          el.classList.remove('fade-in-visible');
          observerRef.current?.observe(el);
        });
      }, 50);
    };

    // Observe elements on initial load and route changes
    observeElements();

    // Cleanup function
    return () => {
      document.documentElement.classList.remove('js-enabled');
      observerRef.current?.disconnect();
    };
  }, [location.pathname]); // Re-run when route changes

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
