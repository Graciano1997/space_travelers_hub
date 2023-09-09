import style from '../assets/style/Header.module.css';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => (
  <header className={style.headerContainer}>
    <Logo />
    <Nav />
  </header>
);

export default Header;
