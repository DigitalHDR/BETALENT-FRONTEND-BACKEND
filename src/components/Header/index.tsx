import logo from '../../assets/Logo.png'
import './styles.css'

function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} className="logo-BeTalent" alt="logo BeTalent" />
      </header>
    </div>
  )
}

export default Header
