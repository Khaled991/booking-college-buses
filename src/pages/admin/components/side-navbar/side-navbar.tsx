import { ReactElement } from 'react';
import './side-navbar.scss';
import Logo from '../../../../assets/images/logo.webp';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Station } from '../../../../assets/icons/station.svg';

const SideNavbar = (): ReactElement => {
  return (
    <header className="side-navbar">
      <div className="side-nav">
        <NavLink to="/admin">
          <img src={Logo} alt="logo" className="logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink className="nav-item" to="#">
              <Station className="nav-item__icon" />
              <span>الرئيسية</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="#">
              <Station className="nav-item__icon" />
              <span>المناطق</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="#">
              <Station className="nav-item__icon" />
              <span>المحطات</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="#">
              <Station className="nav-item__icon" />
              <span>المستخدمون</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="#">
              <Station className="nav-item__icon" />
              <span>الحجوزات</span>
            </NavLink>
          </li>
          <div className="nav-links__active"></div>
        </ul>
      </div>
    </header>
  );
};

export default SideNavbar;
