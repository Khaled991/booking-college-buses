import { ReactElement, lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './core/components/header/header';
import Logo from './assets/images/logo.webp';
import { ReactComponent as SignIn } from './assets/icons/sign-in.svg';
import AppRoutes from './core/constants/routes';

const Home = lazy(() => import('./user/pages/home/home'));
const Auth = lazy(() => import('./user/pages/auth/auth'));
const Admin = lazy(() => import('./admin/admin'));

interface userAndAmin {
  marginTop: string;
  minHeight: string;
}

const App = (): ReactElement => {
  const { pathname } = useLocation();

  const navs = [
    {
      path: `${AppRoutes.auth}/${AppRoutes.signIn}`,
      navName: 'تسجيل الدخول',
      Icon: SignIn,
    },
  ];

  const user: userAndAmin = {
    marginTop: '9.2rem',
    minHeight: 'calc(100vh - 92px)',
  };

  const admin: userAndAmin = {
    marginTop: '0',
    minHeight: '100vh',
  };

  const userPath = pathname.includes('/admin');

  return (
    <div className="App">
      {!userPath && <Header logo={Logo} navs={navs} logoHeight={'6rem'} />}
      <div style={!userPath ? user : admin}>
        <Container fluid>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={`${AppRoutes.auth}/*`} element={<Auth />} />
              <Route path={`${AppRoutes.admin}/*`} element={<Admin />} />
            </Routes>
          </Suspense>
        </Container>
      </div>
    </div>
  );
};

export default App;
