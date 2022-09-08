import { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomButton, {
  ButtonColor,
} from '../../../../core/components/customButton/customButton';
import CustomInput from '../../../../core/components/customInput/customInput';
import { signUpForm } from './sign-up-form.data';
// import { ReactComponent as LeftArrow } from '../../../../assets/icons/left-arrow.svg';

import './sign-up-form.scss';

const SignUpForm = (): ReactElement => {
  return (
    <div>
      <Row>
        {signUpForm.map(({ ...props }, i) => (
          <Col md={6}>
            <CustomInput required {...props} key={i} />
          </Col>
        ))}
      </Row>
      <CustomButton
        onClick={() => {}}
        text="التالي"
        // Icon={LeftArrow}
        type="submit"
        color={ButtonColor.primary}
      />
      <h3 className="sign-in-sign-up-buttontext">
        هل لديك حساب؟ <span>سجل الدخول</span>
      </h3>
    </div>
  );
};

export default SignUpForm;
