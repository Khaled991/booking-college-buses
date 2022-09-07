import { ReactElement } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SVG from '../../types/svg.type';
import { useRemToPx } from '../../utils/unit-converter';
import './header.scss';

interface IHeader {
  logo: string;
  navs: INav[];
  logoWidth?: number | string;
  logoHeight?: number | string;
}

interface INav {
  path: string;
  navName: string;
  Icon: SVG;
}

const Header = ({
  logo,
  navs,
  logoWidth,
  logoHeight,
}: IHeader): ReactElement => {
  return (
    <Navbar fixed="top" expand="lg">
      <Container fluid className="header">
        <NavLink to="/">
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              // eslint-disable-next-line react-hooks/rules-of-hooks
              width={logoWidth ? useRemToPx(logoWidth) : undefined}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              height={logoHeight ? useRemToPx(logoHeight) : undefined}
            />
          </Navbar.Brand>
        </NavLink>

        <Nav className="me-auto">
          {navs.map(({ navName, path, Icon }, i) => (
            <NavLink className="inactive" to={path} key={i}>
              <Nav>{navName}</Nav>
              <Icon className="icon" width="20px" />
            </NavLink>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
