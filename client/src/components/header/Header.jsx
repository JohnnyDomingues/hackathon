import logo from "../../assets/images/Logo.png";
// Assurez-vous d'importer votre fichier CSS
import './header.css';

function Header() {
  return (
    <div className="header-title-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="title-container">
        <h1>Adopt a star</h1>
        <h2>for a night</h2>
      </div>
    </div>
  );
}

export default Header;
