import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';

import AuthProvider from './contexts/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </HashRouter>
  </AuthProvider>,
);
