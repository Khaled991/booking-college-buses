import { ReactElement, Suspense } from 'react';
import Logo from '../../../assets/images/logo.webp';
import './auth.scss';
import CustomForm from '../../../core/components/form/form';
import { Route, Routes, useLocation } from 'react-router-dom';
import SignInForm from './sign-in-form/sign-in-form';
import SignUpForm from './sign-up-form/sign-up-form';
import AppRoutes from '../../../core/constants/routes';

//TODO:remove any
const Auth = ({ children }: any): ReactElement => {
  const { pathname } = useLocation();
  const currentPathIncludesSignIn = pathname.includes(AppRoutes.signIn);
  return (
    <div className="auth-container">
      {/* <div className="background-shape" /> */}
      <CustomForm
        logo={Logo}
        title={currentPathIncludesSignIn ? 'تسجيل الدخول' : 'إنشاء حساب'}
        titlePosition="center"
        maxWidth={currentPathIncludesSignIn ? '26%' : '35%'}
        showButton={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={AppRoutes.signIn} element={<SignInForm />} />
            <Route path={AppRoutes.signUp} element={<SignUpForm />} />
          </Routes>
        </Suspense>
      </CustomForm>
    </div>
  );
};

export default Auth;
