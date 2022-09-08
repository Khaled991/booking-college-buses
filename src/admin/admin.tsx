import { ReactElement, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './admin.scss';
import SideNavbar from './core/components/side-navbar/side-navbar';
import { ReactComponent as Station } from '../assets/icons/station.svg';
import { ReactComponent as Time } from '../assets/icons/time.svg';
import { ReactComponent as Location } from '../assets/icons/location.svg';
import { ReactComponent as Home } from '../assets/icons/home.svg';
import { ReactComponent as Users } from '../assets/icons/users.svg';
import { ReactComponent as Tickets } from '../assets/icons/tickets.svg';
import AdminHome from './pages/admin-home/admin-home';
import { Container } from 'react-bootstrap';

const Admin = (): ReactElement => {
  const adminRootPath = '/admin';

  const navs = [
    { title: 'الرئيسية', path: adminRootPath, Icon: Home },
    { title: 'المناطق', path: `${adminRootPath}/regions`, Icon: Location },
    { title: 'المحطات', path: `${adminRootPath}/station`, Icon: Station },
    {
      title: 'مواعيد الرحلات',
      path: `${adminRootPath}/trips-timetable`,
      Icon: Time,
    },
    { title: 'المستخدمون', path: `${adminRootPath}/users`, Icon: Users },
    {
      title: 'الحجوزات',
      path: `${adminRootPath}/trips-booking`,
      Icon: Tickets,
    },
  ];

  return (
    <div className="admin">
      <SideNavbar navs={navs} />
      <div className="routes">
        <Container fluid>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<AdminHome />} />
              <Route
                path={`${adminRootPath}/regions`}
                element={<AdminHome />}
              />
            </Routes>
          </Suspense>
        </Container>
      </div>
    </div>
  );
};

export default Admin;
