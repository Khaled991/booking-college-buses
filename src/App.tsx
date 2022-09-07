import { ReactElement, lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';

import Logo from './assets/images/logo.webp';
import { ReactComponent as SignIn } from './assets/icons/sign-in.svg';

const Home = lazy(() => import('./pages/Home/Home'));

const App = (): ReactElement => {
  const navs = [
    {
      path: '/sign-in',
      navName: 'تسجيل الدخول',
      Icon: SignIn,
    },
  ];

  return (
    <div className="App">
      <Header logo={Logo} navs={navs} logoHeight={'6rem'} />
      <Container fluid>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};

export default App;
