import { ReactElement } from 'react';
import CustomInput from '../../../../core/components/customInput/customInput';
import { ReactComponent as User } from '../../../../assets/icons/user.svg';
import { ReactComponent as PasswordKey } from '../../../../assets/icons/password-key.svg';
import './sign-in-form.scss';
import CustomButton, {
  ButtonColor,
} from '../../../../core/components/customButton/customButton';
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../../../../core/constants/routes';
import AuthForm from '../auth-form/auth-form';

const SignInForm = (): ReactElement => {
  const navigate = useNavigate();

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
    <AuthForm
      title="تسجيل الدخول"
      titlePosition="center"
      maxWidth="26%"
      onSubmit={() => {}}
    >
      <>
        {input.map((props, i) => (
          <CustomInput required {...props} key={i} />
        ))}
      </>
      <CustomButton
        text="تسجيل الدخول"
        onClick={() => {}}
        type="submit"
        color={ButtonColor.primary}
      />
      <h3 className="sign-in-sign-up-buttontext">
        ليس لديك حساب؟{' '}
        <span onClick={() => navigate(`${AppRoutes.auth}/${AppRoutes.signUp}`)}>
          إنشاء حساب
        </span>
      </h3>
    </AuthForm>
  );
};

export default SignInForm;
