import { ReactElement, Suspense } from 'react';
import Logo from '../../assets/images/logo.webp';
import './auth.scss';
import CustomForm from '../../core/components/form/form';
// import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import { Route, Routes, useLocation } from 'react-router-dom';
import SignInForm from './sign-in-form/sign-in-form';
import SignUpForm from './sign-up-form/sign-up-form';

const Auth = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <div className="auth-container">
      <div className="background-shape" />
      <CustomForm
        title="تسجيل الدخول"
        logo={Logo}
        maxWidth="26%"
        buttontext="تسجيل الدخول"
        titlePosition="center"
      >
        <Suspense fallback={<div>Loadin...</div>}>
          <Routes>
            <Route path={`${pathname}/sign-in`} element={<SignInForm />} />
            <Route path={`${pathname}/sign-up`} element={<SignUpForm />} />
          </Routes>
        </Suspense>
      </CustomForm>
    </div>
  );
};

export default Auth;
