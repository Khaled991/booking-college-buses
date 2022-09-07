import { ReactElement } from 'react';
import CustomInput from '../../../core/components/customInput/customInput';
import { signUpForm } from './sign-up-form.data';

import './sign-up-form.scss';

const SignUpForm = (): ReactElement => {
  return (
    <div>
      {signUpForm.map(({ ...props }, i) => (
        <CustomInput required {...props} key={i} />
      ))}
    </div>
  );
};

export default SignUpForm;
