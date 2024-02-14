import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
