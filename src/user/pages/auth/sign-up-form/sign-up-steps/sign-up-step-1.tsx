import { ReactElement } from 'react';
import { Col } from 'react-bootstrap';
import CustomButton, {
  ButtonColor,
} from '../../../../../core/components/customButton/customButton';
import CustomInput from '../../../../../core/components/customInput/customInput';
import { signUpFormInputs } from '../sign-up-form.data';
import { ReactComponent as LeftArrow } from '../../../../../assets/icons/left-arrow.svg';
import AppRoutes from '../../../../../core/constants/routes';
import { useNavigate } from 'react-router-dom';

interface ISignUpStep1Props {
  nextStep: () => void;
}

const SignUpStep1 = ({ nextStep }: ISignUpStep1Props): ReactElement => {
  const navigate = useNavigate();

  return (
    <>
      {signUpFormInputs.map(({ ...props }, i) => (
        <Col xl={6} key={i}>
          <CustomInput required {...props} />
        </Col>
      ))}
      <CustomButton
        text="التالي"
        Icon={LeftArrow}
        type="submit"
        onClick={nextStep}
        color={ButtonColor.primary}
      />
      <h3 className="sign-in-sign-up-buttontext">
        هل لديك حساب؟
        <span onClick={() => navigate(`${AppRoutes.auth}/${AppRoutes.signIn}`)}>
          سجل الدخول
        </span>
      </h3>
    </>
  );
};

export default SignUpStep1;
