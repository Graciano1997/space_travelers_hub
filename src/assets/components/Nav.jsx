import { NavLink } from 'react-router-dom';
import style from '../style/Header.module.css';

const Nav = () => (
  <nav>
    <ul className={style.navContainer}>
      <li>
        <NavLink to="/rocket" activeClassName={style.agora}>Rocket</NavLink>
      </li>
      <li><a href="/mission">Mission</a></li>
      <li><div className={style.separator} /></li>
      <li><a href="/profile">Profile</a></li>
    </ul>
  </nav>
);

export default Nav;
