import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';

import 'react-toastify/dist/ReactToastify.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
