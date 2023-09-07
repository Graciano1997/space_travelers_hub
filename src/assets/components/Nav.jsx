import { NavLink } from 'react-router-dom';
import style from '../style/Header.module.css';

const Nav = () => (
  <nav>
    <ul className={style.navContainer}>
      <li><NavLink to="/rocket" activeClassName={style.agora}>Rocket</NavLink></li>
      <li><NavLink to="/mission" activeClassName={style.agora}>Mission</NavLink></li>
      <li><div className={style.separator} /></li>
      <li><NavLink to="/profile" activeClassName={style.agora}>Profile</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
