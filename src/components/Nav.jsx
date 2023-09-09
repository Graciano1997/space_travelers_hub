import { NavLink } from 'react-router-dom';
import style from '../assets/style/Header.module.css';

const Nav = () => (
  <nav>
    <ul className={style.navContainer}>
      <li><NavLink to="/rocket">Rockets</NavLink></li>
      <li><NavLink to="/missions">Missions</NavLink></li>
      <li><div className={style.separator} /></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
