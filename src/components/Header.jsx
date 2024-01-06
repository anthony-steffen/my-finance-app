import logo from '../assets/logo.png'

import '../styles/components/Header.css'

const Header = () => {


  return (
    <div className="header">
      <div className='header-logo'>
        <img 
        src={logo} 
        alt="Logo"
        />
      </div>

      <div className="balance">
        <h2>Saldo da conta</h2>
        <span>R$ 0,00</span>
      </div>
    </div>
    
  )
}

export default Header;