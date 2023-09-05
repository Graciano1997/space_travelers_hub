import style from '../style/Header.module.css';
import logo from '../img/planet.png';

const Logo = () => (
  <div className={style.logoContainer}>
    <img src={logo} alt="planet log" className={style.logo} />
    <h1>Space Travelers&apos; Hub</h1>
  </div>
);

export default Logo;
