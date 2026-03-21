import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FranchisePage from './pages/FranchisePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import { MenuProvider } from './context/MenuContext';

import FloatingWhatsApp from './components/FloatingWhatsApp';

const AppLayout = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'franchise', element: <FranchisePage /> },
      { path: 'menu', element: <MenuPage /> },
      { path: 'contact', element: <ContactPage /> }
    ]
  }
]);

function App() {
  return (
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  );
}

export default App;
