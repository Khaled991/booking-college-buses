import { ReactElement } from 'react';
import './side-navbar.scss';
import Logo from '../../../../assets/images/logo.webp';
import { NavLink } from 'react-router-dom';
import SVG from '../../../../core/types/svg.type';

interface ISideNavbarProps {
  navs: INavs[];
}

interface INavs {
  title: string;
  path: string;
  Icon: SVG;
}

const SideNavbar = ({ navs }: ISideNavbarProps): ReactElement => {
  return (
    <div className="side-nav">
      <NavLink to="/admin">
        <img src={Logo} alt="logo" className="logo" />
      </NavLink>
      <ul className="nav-links">
        {navs.map(({ title, path, Icon }, i) => (
          <li key={i}>
            <NavLink className="nav-item" to={path}>
              <Icon className="nav-item__icon" />
              <span>{title}</span>
            </NavLink>
          </li>
        ))}
        <div className="nav-links__active"></div>
      </ul>
    </div>
  );
};

export default SideNavbar;
