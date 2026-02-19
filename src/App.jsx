import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import NotFound from './pages/NotFound';
import CookieBanner from './components/ui/CookieBanner';
import WhatsAppButton from './components/ui/WhatsAppButton';

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to the element
    if (hash) {
      // Small timeout to ensure DOM is ready after route change
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function IntersectionObserverSetup() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    function observe() {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    }

    observe();

    // Re-observe on route change
    const mutationObserver = new MutationObserver(() => {
      observe();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <CookieBanner />
      <WhatsAppButton />
      <IntersectionObserverSetup />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
