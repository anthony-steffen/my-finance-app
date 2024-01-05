
import '../styles/components/Header.css'

const Header = () => {


  return (
    <div className="header">
      <div className="header__logo">
        <img src="https://www.flaticon.com/svg/static/icons/svg/888/888879.svg" alt="Logo" />
      </div>
      <div className="balance">
        <h2>Saldo da conta</h2>
        <span>R$ 0,00</span>
      </div>
    </div>
    
  )
}

export default Header;