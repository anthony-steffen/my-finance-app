import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

import AuthProvider from './contexts/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="my-finance-app" element={<App />} />
          <Route path="my-finance-app/register" element={<Register />} />
          <Route path="my-finance-app/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  </AuthProvider>
)
