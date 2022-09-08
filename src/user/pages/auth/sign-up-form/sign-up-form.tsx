import { ReactElement, useRef } from 'react';

import './sign-up-form.scss';
import AuthForm from '../auth-form/auth-form';
import useSteps, { StepHandler } from '../../../../core/hook/use-steps';
import signUpSteps from './sign-up-steps/sign-up-steps';
import { Row } from 'react-bootstrap';

const SignUpForm = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);
  const { step, nextStep, previousStep }: StepHandler = useSteps(1);
  // const [signUpValues, setSignUpValues] = useFormInputs();

  const onSubmitForm = () => {};

  return (
    <AuthForm
      ref={formRef}
      title="إنشاء حساب"
      titlePosition="center"
      maxWidth="35%"
      onSubmit={onSubmitForm}
    >
      <Row>
        {signUpSteps({
          step,
          previousStep,
          nextStep: () => {
            if (formRef.current?.checkValidity()) nextStep();
          },
        })}
      </Row>
    </AuthForm>
  );
};

export default SignUpForm;
