import { ReactElement, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './admin.scss';
import SideNavbar from './components/side-navbar/side-navbar';

const Admin = (): ReactElement => {
  return (
    <div className="admin">
      <SideNavbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      </Suspense>
    </div>
  );
};

export default Admin;
