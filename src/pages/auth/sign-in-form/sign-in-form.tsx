import { ReactElement } from 'react';
import CustomInput from '../../../core/components/customInput/customInput';
import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as PasswordKey } from '../../../assets/icons/password-key.svg';
import './sign-in-form.scss';

const SignInForm = (): ReactElement => {
  const input = [
    {
      label: 'الاسم',
      Icon: User,
      placeholder: 'New Golden',
      type: 'text',
    },
    {
      label: 'كلمة المرور',
      Icon: PasswordKey,
      placeholder: '••••••••••••••••',
      type: 'password',
    },
  ];
  return (
    <div>
      {input.map(({ ...props }, i) => (
        <CustomInput required {...props} key={i} />
      ))}
    </div>
  );
};

export default SignInForm;
