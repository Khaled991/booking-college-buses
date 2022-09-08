import { ReactElement, Suspense } from 'react';
import './auth.scss';
import { Route, Routes } from 'react-router-dom';
import SignInForm from './sign-in-form/sign-in-form';
import SignUpForm from './sign-up-form/sign-up-form';
import AppRoutes from '../../../core/constants/routes';

const Auth = (): ReactElement => {
  // const onChangeField = ({
  //   target: { value, name },
  // }: React.ChangeEvent<HTMLInputElement>) => {
  //   setFeedback({ ...feedback, [name]: value });
  // };

  return (
    <div className="auth-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={AppRoutes.signIn} element={<SignInForm />} />
          <Route path={AppRoutes.signUp} element={<SignUpForm />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Auth;
